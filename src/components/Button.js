import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text = 'text', handler }) => {
    return (
        <>
            <button onClick={handler}>{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button
