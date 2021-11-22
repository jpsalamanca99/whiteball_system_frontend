import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label = 'Label', type = 'text'}) => {
    return (
        <>
            <div>{label}</div>
            <input type={type} />
            <br/>
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string
}

export default Input;
