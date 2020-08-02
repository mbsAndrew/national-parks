import React from 'react';
import { Router } from 'react-router';
import Routes from './Routes';
import history from './services/history';

class Main extends React.Component {
    render() {
        return (
            <>
                <Router history={history}>
                    <Routes />
                </Router>               
            </>
        );
    }
}

export default Main;