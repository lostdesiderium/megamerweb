import React, { Component } from 'react';
import WebAppLogo from '../../assets/logos/webapp_logo_161x90.png';
import {
    NavLink  // for navigation component
} from 'react-router-dom';
import AccountComponentView from './accountComponentView';

export default class TopNavbar extends Component {

    render(){

        const LogingElements = () => {
            return (
            <ul className="loggin-elements">
                <NavLink exact to="/login"><li>Log in</li></NavLink>
                <NavLink exact to="/signup"><li>Sign up</li></NavLink>
            </ul>
            );
        }

        return(
            <nav className="top-navbar-container">
                <div className="logo-div">
                    <NavLink exact to="/"><img src={WebAppLogo} alt="megamer_logo"/></NavLink>
                </div>
                {this.props.isLoggedIn ? <AccountComponentView user={this.props.user} topNavBarNeedsUpdate={this.props.topNavBarNeedsUpdate} /> : <LogingElements /> }
            </nav>
        );
    }
}
