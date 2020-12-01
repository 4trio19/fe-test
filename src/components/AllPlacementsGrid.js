import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function AllPlacementsGrid(props) {
  const placements = props.placements;

  const rows = [];
  
  const columns = [
    { field: 'date', headerName: 'Date', width: 140 },
    { field: 'requests', headerName: 'Requests', width: 100 },
    { field: 'uniqueOpens', headerName: 'Unique Opens', width: 140 },
    { field: 'clicks', headerName: 'Clicks', width: 100 },
    { field: 'ctr', headerName: 'CTR', width: 100 },
    { field: 'estimatedRevenue', headerName: 'Estimated Rev', width: 100 },
    { field: 'rpm', headerName: 'RPM', width: 100 },
  ];
  return (
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
  )
}
