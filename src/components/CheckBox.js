import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label = 'Label', value, setValue}) => {

    const onChange = (e) => setValue(e.target.checked)

    return (
        <>
            <label for='checkbox'>{label}</label>
            <input id='checkbox' type='checkbox' value={value} onChange={onChange} />
            <br/>
        </>
    );
}

CheckBox.propTypes = {
    label: PropTypes.string,
}

export default CheckBox;
