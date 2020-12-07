import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { filterDate } from '../scripts/utils';
const jsonAggregate = require('json-aggregate');

export default function GroupByPlacementGrid(props) {
  
  const placementByPlacementCollection = jsonAggregate.create(JSON.stringify(filterDate(props.startDate, props.endDate, props.placements, 'date')));

  const placements = placementByPlacementCollection.group({
    id: 'placementId',
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
    { field: 'id', headerName: 'Placement ID', width: 140 },
    { field: 'placementName', headerName: 'Name', width: 120 },
    { field: 'requestsTotal', headerName: 'Requests', width: 100 },
    { field: 'uniqueOpens', headerName: 'Unique Opens', width: 140 },
    { field: 'clicks', headerName: 'Clicks', width: 100 },
    { field: 'ctr', headerName: 'CTR', width: 120 },
    { field: 'estimatedRevenue', headerName: 'Estimated Rev', width: 140 },
    { field: 'rpm', headerName: 'RPM', width: 120 },
  ];
  return (
      <div style={{ height: 600, width: '100%' }}>
        <p>Grouped By Placement</p>
        <DataGrid rows={rows} columns={columns} />
      </div>
  )
}