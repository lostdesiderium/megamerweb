import React, { Component } from 'react';

export default class ProfileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrowState: 'up',
        }
    }


    render(){
        return(
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-login"></div>

                <section className="profile-div">
                    <div className="profile-general-info">
                        <div className="user-field">
                            <label htmlFor="profile-current-password">Current password</label>
                            <input type="text" name="profile-current-password" placeholder="Current password"/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="profile-new-password">New password</label>
                            <input type="text" name="profile-new-password" placeholder="New password"/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="profile-repeat-new-password">Repeat new password</label>
                            <input type="text" name="profile-repeat-new-password" placeholder="Repeat new password"/>
                        </div>
                    </div>

                    <div className="submit-button-wrapper">
                        <input className="submit-button" type="submit" name="user-reset-password" value="Reset password"
                        onClick={this.handleProfileUpdate} />
                    </div>
                </section>

                <section className="profile-div">
                    <div className="profile-general-info">
                        <div className="user-field">
                            <label htmlFor="user-profile-private">Make profile private</label>
                            <input className="input-checkbox" type="checkbox" name="user-profile-private" value="" checked="false" />
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
