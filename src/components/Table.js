import React from 'react'

const Table = ({ headers, rows }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={header.label + i}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!rows.isEmpty &&
            rows.map((row, j) => (
              <tr key={`row- ${j}`}>
                {Object.values(row).map((col, k) => (
                  <td key={`col-${k}`}>
                    {col}
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Table
