import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { filterDate } from '../scripts/utils';

const jsonAggregate = require('json-aggregate');

export default function AllPlacementsGrid(props) {

  const rows = filterDate(props.startDate, props.endDate, props.placements, 'id');

  const columns = [
    { field: 'id', headerName: 'Date', width: 180 },
    { field: 'requestsTotal', headerName: 'Requests', width: 100 },
    { field: 'uniqueOpens', headerName: 'Unique Opens', width: 140 },
    { field: 'clicks', headerName: 'Clicks', width: 100 },
    { field: 'ctr', headerName: 'CTR', width: 120 },
    { field: 'estimatedRevenue', headerName: 'Estimated Rev', width: 140 },
    { field: 'rpm', headerName: 'RPM', width: 120 },
  ];
  return (
      <div style={{ height: 600, width: '100%' }}>
        <p>All Placements - Events from a single day have been combined into 1 row with aggregate values</p>
        <DataGrid rows={rows} columns={columns} />
      </div>
  )
}
