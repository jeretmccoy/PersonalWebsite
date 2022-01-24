import React, {Component} from 'react';
import './css/style.css';
import {TopBar} from "./topbar/TopBar";
import {TopBar2} from "./topbar/TopBar";
import Home from "./Home/Home";
import Code from "./Code/Code";
import LinkedIn from "./LinkedIn/LinkedIn";
import GitHub from "./GitHub/GitHub";
import {Helmet} from "react-helmet";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

class Application extends Component
{
    render()
    {
        return  (
            <Router>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>MY TITLE</title>
                    <link rel="canonical" href="https://myurl.com"/>
                    <meta name="my description" content="my content"/>
                </Helmet>
                <TopBar/>
                <TopBar2/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path='/code'>
                        <Code />
                    </Route>
                    <Route exact path='/LinkedIn'>
                        <LinkedIn />
                    </Route>
                    <Route exact path='/GitHub'>
                        <GitHub />
                </Switch>
            </Router>
        );
    }
}

export default Application; 
 
