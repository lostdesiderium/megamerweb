import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
        StaticRouter, // for server rendering    
        Route, // for display component
        NavLink  // for navigation component
    } from 'react-router-dom';

import SideNavbar from './sideNavBar';
import TopNavbar from './topNavbar';
import LandingPage from './landingPageContent';
import GamesPage from './gamesComponent';
import NewsPage from './newsComponent';
import TournamentsPage from './tournamentsComponent';
import FpPage from './fpComponent';
import HelpPage from './helpComponent';
import LoginPage from './loginComponent';
import SignupPage from './signupComponent';

export default class Root extends Component {
    render() {
        return(
            <Router>
                <div className="container-fluid">
                    <SideNavbar/>
                    <TopNavbar />
                        
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/home" component={LandingPage}/> 
                    <Route exact path="/games" component={GamesPage}/> 
                    <Route exact path="/news" component={NewsPage}/>
                    <Route exact path="/tournaments" component={TournamentsPage}/>
                    <Route exact path="/fp" component={FpPage}/>
                    <Route exact path="/help" component={HelpPage}/> 
                    <Route exact path="/login" component={LoginPage}/> 
                    <Route exact path="/signup" component={SignupPage}/> 
                </div>
            </Router>
        ); 

    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
