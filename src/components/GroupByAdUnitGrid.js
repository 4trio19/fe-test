import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function GroupByAdUnitGrid(props) {
  const placements = props.placementsAggregatedByAdUnit;

  const rows = placements;
  
  const columns = [
    { field: 'id', headerName: 'Ad Unit', width: 200 },
    { field: 'requestsTotal', headerName: 'Requests', width: 100 },
    { field: 'uniqueOpens', headerName: 'Unique Opens', width: 140 },
    { field: 'clicks', headerName: 'Clicks', width: 100 },
    { field: 'ctr', headerName: 'CTR', width: 120 },
    { field: 'estimatedRevenue', headerName: 'Estimated Rev', width: 140 },
    { field: 'rpm', headerName: 'RPM', width: 120 },
  ];
  return (
    <div style={{ height: 600, width: '100%' }}>
      <p>Grouped By Ad Unit</p>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}
