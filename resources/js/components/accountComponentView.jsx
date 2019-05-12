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
        this.props.history.push('/login');
    }

    render(){
        return(
                <div className="account-widget">
                    <div className="username-line"> {this.props.user.username} , </div>
                    <div className="account-rounded-pic" onClick={this.openDrawer}><SVGIcon name="ic-user-circle" fill="#fff" width={40} />
                        <div className="account-options-dropdown" >
                            <ul className="dropdown-ul">
                                <li><NavLink exact to="/user-profile"> My profile </NavLink></li>
                                <li><NavLink exact to="/user-acc"> My account </NavLink></li>
                                <li><NavLink exact to="/user-settings"> Settings </NavLink></li>
                                <li onClick={this.logout}> Log out </li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}
