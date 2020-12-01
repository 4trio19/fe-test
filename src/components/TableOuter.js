import React from 'react';
import AllPlacementsTable from './AllPlacementsTable';

export default function TableOuter(props) {
  return (
    <div>
      <table>
        <tbody>
          <AllPlacementsTable placements={ props.placements } />
        </tbody>
      </table>
    </div>
  )
}
