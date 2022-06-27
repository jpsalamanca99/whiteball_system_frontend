import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardTournaments from '../views/DashboardTournaments'
import TournamentDetails from '../views/TournamentDetails'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to="/DashboardTournaments" />} />

                <Route path='DashboardTournaments' element={<DashboardTournaments />} />
                <Route path='TournamentDetails' element={<TournamentDetails />} />
            </Routes>
        </>
    )
}
