import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label = 'Label', type = 'text', value, setValue }) => {

    const onChange = (e) => setValue(e.target.value)

    return (
        <>
            <div>{label}</div>
            <input type={type} value={value} onChange={onChange} />
            <br />
        </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
}

export default Input;
