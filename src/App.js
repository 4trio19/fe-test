import React, { useState, useEffect } from 'react';
import './App.css';
import Select from './components/Select'
import TableOuter from './components/TableOuter';
import containerData from './data/containers.json';
import placementData from './data/placements.json';


function App() {

  // State stuff
  const [isLoading, setIsLoading] = useState(true);
  const [containers, setContainers] = useState([]);
  const [placements, setPlacements] = useState([]);
  

  // useEffect to get data into state

  
  useEffect(() => {
    setContainers(containerData);
    setPlacements(placementData);
    return () => {
      setIsLoading(false);
    }
  }, [])

  const groupByOptions = ['All Placements', 'All Containers'];
  console.log(containers);

  return (
    <div className="App">
      <Select options={groupByOptions} />
      <TableOuter />
    </div>
  );
}

export default App;
