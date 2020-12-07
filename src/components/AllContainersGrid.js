import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { filterDate } from '../scripts/utils';

const jsonAggregate = require('json-aggregate');

export default function AllContainersGrid(props) {
  
  const containerCollection = jsonAggregate.create(JSON.stringify(filterDate(props.startDate, props.endDate, props.containers, 'date')));

  const containers = containerCollection.group({
    id: 'date',
    requestsTotal: { $sum: 'requestsTotal' },
    uniqueOpens: { $sum: 'uniqueOpens' },
    clicks: { $sum: 'clicks' },
    ctr: { $avg: 'ctr' },
    estimatedRevenue: { $sum: 'estimatedRevenue' },
    rpm: { $avg: 'rpm' },
    date2: { $addToSet: 'date' }
  });

  const rows = containers.data;
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
        <p>All Containers - Events from a single day have been combined into 1 row with aggregate values</p>
        <DataGrid rows={rows} columns={columns} />
      </div>
  )
}
