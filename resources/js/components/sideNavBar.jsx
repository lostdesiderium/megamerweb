import React, { Component } from 'react';
import SVGIcon from '../../assets/icons/SVGIcons.js';
import {
    NavLink  // for navigation component
} from 'react-router-dom';

export default class SideNavbar extends Component {

    render(){
        return(
            <nav className="side-navbar-container">
                <ul>
                    <NavLink exact to="/"><li>Home<SVGIcon fill="#fff" width={24} name="ic-home" /></li></NavLink>
                    <NavLink exact to="/games"><li>Games<SVGIcon fill="#fff" width={24} name="ic-console" /></li></NavLink>
                    <NavLink exact to="/news"><li>News<SVGIcon fill="#fff" width={24} name="ic-news" /></li></NavLink>
                    <NavLink exact to="/tournaments"><li>Tournaments<SVGIcon fill="#fff" width={24} name="ic-tournaments" /></li></NavLink>
                    <NavLink exact to="/fp"><li>Find a playmate<SVGIcon fill="#fff" width={24} name="ic-find-friend" /></li></NavLink>
                    <NavLink exact to="/help"><li>Help<SVGIcon fill="#fff" width={24} name="ic-help" /></li></NavLink>
                </ul>
            </nav>
        );
    }
}
