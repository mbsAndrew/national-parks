import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import ParkPage from './ParkPage';
import Expanded from './Expanded';

class Main extends React.Component {
    render() {        
        return (            
            <HashRouter>
            <>
                <h1>Sample</h1>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/info">Stuff</NavLink></li>
                    <li><NavLink to="/expanded">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/info" component={ParkPage} />
                    <Route path="/expanded" component={Expanded} />
                </div>
            </>
            </HashRouter>
        );
    }
}

export default Main;