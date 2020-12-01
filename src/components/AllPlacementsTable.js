import React from 'react'

export default function AllPlacementsTable(props) {
  const placements = props.placements;
  return (
    <div>
      {
        placements.map((placement, i) => {
          return (
            <tr key={i}>
              <td>
                { placement.placementName }
              </td>
            </tr>
          )
        })
      }
    </div>
  )
}
