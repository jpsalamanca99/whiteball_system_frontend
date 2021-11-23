import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import RegisterTournament from './RegisterTournament';

const DashboardTournaments = () => {

    const headers = [{ label: 'Fecha' }, { label: 'Inscritos' }, { label: 'Accion' }]
    const tempRows = [
        [{ value: '10/10/2021' }, { value: '15' }, { value: Button({ text: 'Detalles' }) }],
        [{ value: '10/10/2021' }, { value: '15' }, { value: Button({ text: 'Detalles' }) }],
        [{ value: '10/10/2021' }, { value: '15' }, { value: Button({ text: 'Detalles' }) }],
        [{ value: '10/10/2021' }, { value: '15' }, { value: Button({ text: 'Detalles' }) }],
        [{ value: '10/10/2021' }, { value: '15' }, { value: Button({ text: 'Detalles' }) }],
    ]
    const [registerModal, setRegisterModal] = useState(false)

    const modalHandler = () => {
        setRegisterModal(!registerModal);
    }

    return (
        <>
            <Table headers={headers} rows={tempRows} />
            <Button text='Crear nuevo torneo' handler={modalHandler} />
            <Modal modalOpen={registerModal}>
                <RegisterTournament onSubmit={modalHandler} />
            </Modal>
        </>
    )
}

DashboardTournaments.propTypes = {

}

export default DashboardTournaments

