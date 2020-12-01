import React from 'react';
import AllPlacementsGrid from './AllPlacementsGrid';

export default function DataGridContainer(props) {
  return (
    <div className="grid-container">
      <AllPlacementsGrid placements={ props.placements } />
    </div>
  )
}
