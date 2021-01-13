import React from "react";
import Home from "./home/home";
import Others from "./others/others";

import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'


export const App = () => {

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/others">Others</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/others" component={Others}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
