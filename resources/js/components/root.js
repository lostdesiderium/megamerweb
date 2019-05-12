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
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {},
            needsUpdate: false,
        }

        this.checkAuth = this.checkAuth.bind(this);
        this.topNavBarNeedsUpdate = this.topNavBarNeedsUpdate.bind(this);
        this.login = this.login.bind(this);
    }

    // Checking authentification of user
    checkAuth(){
        if(localStorage.getItem('appState') !== null){
            var appState = JSON.parse( localStorage.getItem('appState') );

            this.setState({
                isLoggedIn: appState.isLoggedIn,
                user: appState.user,
            });
        }
        else{
            this.setState({
                isLoggedIn: false,
                user: {},
            });
        }
    }

    // Forcing child rerender after set state in checkAuth method and making sure data about user from local storage is deleted
    topNavBarNeedsUpdate(){
        localStorage.removeItem("appState");
        this.checkAuth();
    }

    // Forcing child rerender after set state in checkAuth method
    login(){
        this.checkAuth();
    }

    componentDidMount(){
        this.checkAuth();
    }

    // when user enters web site after inactivity app checks if user is authenticated
    componentWillMount() {
        this.checkAuth();
    }

    render() {
        return(
            <Router topNavBarNeedsUpdate={this.topNavBarNeedsUpdate}>
                <div className="container-fluid">
                    <SideNavbar/>
                    <TopNavbar isLoggedIn={this.state.isLoggedIn} topNavBarNeedsUpdate={this.topNavBarNeedsUpdate} user={this.state.user}  />

                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/home" component={LandingPage}/>
                    <Route exact path="/games" component={GamesPage}/>
                    <Route exact path="/news" component={NewsPage}/>
                    <Route exact path="/tournaments" component={TournamentsPage}/>
                    <Route exact path="/fp" component={FpPage}/>
                    <Route exact path="/help" component={HelpPage}/>
                    <Route exact path="/login" render={ (props) => <LoginPage {...props} login={this.login} /> }/>
                    <Route exact path="/signup" component={SignupPage}/>
                </div>
            </Router>
        );

    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
