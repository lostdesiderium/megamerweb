import React, { Component } from 'react';

export default class PopupNotification extends Component{
    constructor(props){
        super(props);
        this.state = {
            popupMessageType: this.props.messageType,
            popupMessage: this.props.message,
            popupTitle: this.props.messageTitle,
        }
    }



    render(){
        return(
            <div className="popup-box">
                <div className="popup-type">
                    {this.state.popupMessageType === 'success' ? <i className="fas fa-check-circle"/> : <i className="fas fa-exclamation-triangle"></i>}
                </div>
                <div className="popup-title">
                    {this.state.popupTitle}
                </div>
                <div className="popup-message">
                    {this.state.popupMessage}
                </div>
            </div>
        );
    };
}
