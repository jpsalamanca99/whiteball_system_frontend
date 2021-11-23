import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ handler, children }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        handler(e);
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

Form.propTypes = {

}

export default Form
