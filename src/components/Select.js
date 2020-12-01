import React from 'react'

export default function Select(props) {
  const options = props.options;
  return (
    <div>
      <select name="groupSelect" id="group-select">
        {
          options.map((option, index) => {
            return (
            <option value={option} key={index}>{option}</option>
            )
          }
          )
        }
      </select>
    </div>
  )
}
