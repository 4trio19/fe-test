import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select';
import DateRange from './components/DateRange';
import DataGridContainer from './components/DataGridContainer';
import containerData from './data/containers.json';
import placementData from './data/placements.json';
import { calculateCTR, calculateRPM, cleanDate } from './scripts/utils.js';

const jsonAggregate = require('json-aggregate');

const cleanToday = cleanDate(new Date());

//Add ctr and rpm to JSON and id so Material is happier
const fullPlacements = placementData.map((placement, i) => {
  return ({ ...placement, 
    ctr: calculateCTR(placement.clicks, placement.uniqueOpens),
    rpm: calculateRPM(placement.estimatedRevenue, placement.uniqueOpens),
    id: i
  })
});

const fullContainers = containerData.map((container, i) => {
  return ({ ...container, 
    ctr: calculateCTR(container.clicks, container.uniqueOpens),
    rpm: calculateRPM(container.estimatedRevenue, container.uniqueOpens),
    id: i
  })
});


//Clean up date for grouping
fullPlacements.map ((placement) => {
  const dayDate = placement["date"].slice(0, 10);
  return placement["date"] = dayDate;
});

fullContainers.map ((container) => {
  const dayDate = container["date"].slice(0, 10);
  return container["date"] = dayDate;
});

// store a list of options that the list can be grouped by
const groupByOptions = ['allPlacements', 'allContainers', 'groupByContainer', 'groupByPlacement', 'groupByAdUnit'];
const placementCollection = jsonAggregate.create(JSON.stringify(fullPlacements));

//Create groups

  const AggregatedPlacements = placementCollection.group({
  id: 'date',
  requestsTotal: { $sum: 'requestsTotal' },
  uniqueOpens: { $sum: 'uniqueOpens' },
  clicks: { $sum: 'clicks' },
  ctr: { $avg: 'ctr' },
  estimatedRevenue: { $sum: 'estimatedRevenue' },
  rpm: { $avg: 'rpm' },
  date2: { $addToSet: 'date' }
});


function App() {

  // State stuff
  const [containers, setContainers] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [placementsAggregated, setPlacementsAggregated] = useState([]);
  const [groupBy, setGroupBy] = useState("allPlacements");
  const [startDate, setStartDate] = useState("2019-01-01");
  const [endDate, setEndDate] = useState(cleanToday);

  //functions for updating state

  const updateView = (e) => {
    return setGroupBy(e.target.value);
  }

  const updateStartDate = (e) => {
    return setStartDate(e.target.value);
  }

  const updateEndDate = (e) => {
    return setEndDate(e.target.value);
  }

  // useEffect to get data into state
  useEffect(() => {
      setPlacements(fullPlacements);
      setContainers(fullContainers);
      setPlacementsAggregated(AggregatedPlacements.data);
    }, [fullContainers, fullPlacements, AggregatedPlacements]);

  return (
    <div className="App">
      <Select options={ groupByOptions } groupBy={ groupBy } handleChange={ updateView } />
      <DateRange handleStartChange={ updateStartDate } handleEndChange={ updateEndDate } startDate={ startDate } endDate={ endDate } />
      <DataGridContainer containers={ containers } placements={ placements } placementsAggregated={ placementsAggregated } group={ groupBy } startDate={ startDate } endDate={ endDate } />
    </div>
  );
}

export default App;
