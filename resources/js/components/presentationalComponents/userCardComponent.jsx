import React, { Component } from 'react';
import SVG from '../../../assets/icons/SVGIcons';


export default class UserCard extends Component{

    render(){
        return (
            <div className="col-lg-4 col-xl-4 col-md-4 col-xs-12 col-sm-12 user-card" onClick={ (userId) => this.props.userPopupCallback(this.props.userId)}>
                <div className="half-card-background">
                    <span className="default-avatar"> <SVG fill="#fff" width={48} name="ic-default-user-avatar"></SVG> </span>
                </div>
                <div className="user-card-field"> User nickname -  {this.props.userNickname} </div>
                <div className="user-card-field"> Country - {this.props.userCountry} </div>
                <div className="user-card-field"> Prefferable language - {this.props.userLanguage} </div>
            </div>
        );
    };


}
