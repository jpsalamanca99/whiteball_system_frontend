import React from 'react';
import ReactDOM from 'react-dom';
//import DashboardTournaments from './views/DashboardTournaments';
import TournamentDetails from './views/TournamentDetails';


const divRoot = document.querySelector('#app');

ReactDOM.render(<TournamentDetails tournametId={1} />, divRoot);
