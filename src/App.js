import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select';
import DateRange from './components/DateRange';
import TableOuter from './components/TableOuter';
import containerData from './data/containers.json';
import placementData from './data/placements.json';


function App() {

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
      <TableOuter containers={ containers } placements={ placements } group={ groupBy } />
    </div>
  );
}

export default App;
