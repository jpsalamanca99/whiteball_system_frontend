import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ headers, rows }) => {

    return (
        <>
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
                            {row.map((col, k) => (
                                <td key={`col-${k}`}>
                                    {col.value}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}

Table.propTypes = {

}

export default Table

