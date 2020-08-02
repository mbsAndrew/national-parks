import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import ParkPage from './ParkPage';
import NavBar from './Components/NavBar';

export default function Routes() {
    return (
        <div>
            <header>
                <NavBar />
            </header>            
            <article>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/info/:parkID" component={ParkPage} />
                    <Route path="/hello">
                        <>
                            Hello?
                </>
                    </Route>
                </Switch>
            </article>            
            <footer>
                I'm a footer, bitch!
            </footer>
        </div>
    )
}