import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import ParkPage from './ParkPage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

export default function Routes() {
    return (
        <div>
            <header>
                <NavBar />
            </header>            
            <article>
                <Switch>                    
                    <Route exact path="/" component={Home} />
                    <Route exact path="/national-parks" component={Home} />
                    <Route path="/info/:parkID" component={ParkPage} />                   
                </Switch>
            </article>            
            <Footer />
        </div>
    )
}