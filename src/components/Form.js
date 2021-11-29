import React from 'react'

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

export default Form
