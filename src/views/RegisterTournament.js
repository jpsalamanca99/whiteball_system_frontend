import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../components/Input';
import Button from '../components/Button';
import Form from '../components/Form';

const RegisterTournament = ({ onSubmit }) => {
    const [tournamentDate, setTournamentDate] = useState('10/10/2021')

    const createTournament = (e) => {
        console.log('Se hace el POST');
        onSubmit();
    }

    return (
        <Form handler={createTournament}>
            <Input label='Fecha del torneo' type='date' value={tournamentDate} setValue={setTournamentDate} />
            <Button text='Crear' type='submit' handler={createTournament} />
        </Form>
    )
}

RegisterTournament.propTypes = {

}

export default RegisterTournament
