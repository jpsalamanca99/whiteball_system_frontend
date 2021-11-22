import React from 'react'
import PropTypes from 'prop-types'
import Input from '../components/Input';
import Button from '../components/Button';

const RegisterTournament = () => {
    return (
        <>
            <Input label='Fecha del torneo' type='date' />
            <Button text='Crear' />
        </>
    )
}

RegisterTournament.propTypes = {

}

export default RegisterTournament
