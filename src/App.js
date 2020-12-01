import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select';
import DateRange from './components/DateRange';
import DataGridContainer from './components/DataGridContainer';
import containerData from './data/containers.json';
import placementData from './data/placements.json';
import { calculateCTR, calculateRPM } from './scripts/utils.js';


function App() {

  //Add ctr and rpm to JSON and id so Material is happier

  const fullPlacements = placementData.map((placement, i) => {
    return ({ ...placement, 
      ctr: calculateCTR(placement.clicks, placement.uniqueOpens),
      rpm: calculateRPM(placement.estimatedRevenue, placement.uniqueOpens),
      id: i
    })
  });


  console.log(fullPlacements);

  // State stuff
  const [isLoading, setIsLoading] = useState(true);
  const [containers, setContainers] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [groupBy, setGroupBy] = useState("All Containers");
  

  // useEffect to get data into state
  useEffect(() => {
    setContainers(containerData);
    setPlacements(placementData);
    return () => {
      setIsLoading(false);
    }
  }, [])


  // store a list of options that the list can be grouped by
  const groupByOptions = ['All Placements', 'All Containers'];

  return (
    <div className="App">
      <Select options={ groupByOptions } />
      <DateRange />
      <DataGridContainer containers={ containers } placements={ placements } group={ groupBy } />
    </div>
  );
}

export default App;
