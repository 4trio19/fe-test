import React from 'react'

export default function Select(props) {
  const options = props.options;
  return (
    <div>
      <select name="groupSelect" value={props.group} id="group-select" onChange={props.handleChange}>
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
