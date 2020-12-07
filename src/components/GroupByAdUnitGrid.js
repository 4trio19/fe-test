import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { filterDate } from '../scripts/utils';
const jsonAggregate = require('json-aggregate');
export default function GroupByAdUnitGrid(props) {
  const placementByAdUnitCollection = jsonAggregate.create(JSON.stringify(filterDate(props.startDate, props.endDate, props.placements, 'date')));

  const placements = placementByAdUnitCollection.group({
    id: 'adUnitSize',
    requestsTotal: { $sum: 'requestsTotal' },
    uniqueOpens: { $sum: 'uniqueOpens' },
    clicks: { $sum: 'clicks' },
    ctr: { $avg: 'ctr' },
    estimatedRevenue: { $sum: 'estimatedRevenue' },
    rpm: { $avg: 'rpm' },
    placementName: { $addToSet: 'placementName' }
  });
  const rows = placements.data;
  
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
