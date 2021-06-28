import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Datos from '../Datos';

const Home = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/Datos">
                    <Datos />
                </Route>
            </Switch>
        </Router>
    )
}

export default Home;
