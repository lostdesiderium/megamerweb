import React, { Component } from 'react';
import {
    NavLink  // for navigation component
} from 'react-router-dom';
import SVGIcon from '../../assets/icons/SVGIcons';

export default class AccountComponentView extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

        this.openDrawer = this.openDrawer.bind(this);
        this.logout = this.logout.bind(this);
    }

    openDrawer(){
        var widgetExpanded = document.getElementsByClassName('account-options-dropdown')[0];
        if( widgetExpanded.style.height === "auto") {
            jQuery('.account-options-dropdown').css( {
                "display": "none",
                "height": "0px",
                }
            );
        }
        else{
            jQuery('.account-options-dropdown').css( {
                "display": "block",
                "height": "auto",
                }
            );
        }
    }

    logout(){
        this.props.topNavBarNeedsUpdate();
    }

    render(){
        return(
                <div className="account-widget">
                    <div className="username-line"> {this.props.user.username} </div>
                    <div className="account-rounded-pic" onClick={this.openDrawer}><SVGIcon name="ic-user-circle" fill="#fff" width={40} />
                        <div className="account-options-dropdown" >
                            <ul className="dropdown-ul">
                                <NavLink exact to="/user-profile"><li> My profile </li></NavLink>
                                <NavLink exact to="/user-account"><li> Account settings </li></NavLink>
                                <NavLink exact to="/home"><li onClick={this.logout}> Log out </li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}
