import React from 'react'

export default function DateRange(props) {
  return (
    <div className="date-picker-container">
      <label htmlFor="startDate">Start Date:</label>
      <input type="date" name="startDate" id="startDate" value={ props.startDate } onChange={ props.handleStartChange } />
      <label htmlFor="endDate">End Date:</label>
      <input type="date" name="endDate" id="endDate" value={ props.endDate } onChange={ props.handleEndChange } />
    </div>
  )
}
