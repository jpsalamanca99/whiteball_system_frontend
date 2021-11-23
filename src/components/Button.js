import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text = 'text', type , handler }) => {
    return (
        <>
            <button type={type} onClick={handler}>{text}</button>
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
}

export default Button
