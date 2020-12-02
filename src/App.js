import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select';
import DateRange from './components/DateRange';
import DataGridContainer from './components/DataGridContainer';
import containerData from './data/containers.json';
import placementData from './data/placements.json';
import { calculateCTR, calculateRPM } from './scripts/utils.js';
const jsonAggregate = require('json-aggregate');

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

  const aggregratedPlacements = placementCollection.group({
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
  const [placementsAggregrated, setPlacementsAggregated] = useState([]);
  const [groupBy, setGroupBy] = useState("allPlacements");
  

  // useEffect to get data into state
  useEffect(() => {
      setPlacements(fullPlacements);
      setContainers(fullContainers);
      setPlacementsAggregated(aggregratedPlacements.data);
    }, [fullContainers, fullPlacements, aggregratedPlacements]);

  return (
    <div className="App">
      <Select options={ groupByOptions } />
      <DateRange />
      <DataGridContainer containers={ containers } placements={ placements } placementsAggregated={ placementsAggregrated } group={ groupBy } />
    </div>
  );
}

export default App;
