import React, { Component } from 'react';
import WebAppLogo from '../../assets/logos/webapp_logo_161x90.png';
import {
    NavLink  // for navigation component
} from 'react-router-dom';

export default class TopNavbar extends Component {

    render(){
        return(
            <nav className="top-navbar-container">
                <div className="logo-div">
                    <img src={WebAppLogo} alt="megamer_logo"/>
                </div>
                <ul>
                    <NavLink exact to="/login"><li>Log in</li></NavLink>
                    <NavLink exact to="/signup"><li>Sign up</li></NavLink> 
                </ul>
            </nav>
        );
    }
}
