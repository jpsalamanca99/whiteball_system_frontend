import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import RegisterPlayer from './RegisterPlayer'

const RegisterPerson = () => {

    const [isPlayer, setIsPlayer] = useState(false)

    const testHandler = () => {
        console.log(isPlayer)
    }

    return (
        <>
            <Input label='Nombre' />
            <Input label='Apellido' />
            <Input label='Telefono' type='tel' />
            <CheckBox label='¿Es jugador?' value={isPlayer} setValue={setIsPlayer} / >
            <RegisterPlayer /><br />
            <Button text='Registrar' handler={testHandler} />
        </>
    );
}

export default RegisterPerson;
