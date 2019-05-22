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

                <div className="profile-div">
                    <div className="profile-general-info">
                        <div className="user-field">
                            <label htmlFor="user-nick-name">Nickname</label>
                            <input type="text" name="user-nick-name" placeholder="Nickname"/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="user-country">Country</label>
                            <input type="text" name="user-country" placeholder="Country"/>
                        </div>
                    </div>

                    <div className="profile-pubg-info">
                        <div className="profile-game-info-header">
                            <span className="game-info-header-title">Playerunknown's Battleground</span>
                            <span className="game-info-header-arrow-pubg"> {this.state.arrowState === 'up' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>} </span>
                        </div>
                        <div className="profile-game-info-fields">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="info"/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-csgo-info">
                        <div className="profile-game-info-header">
                            <span className="game-info-header-title">Counter-Strike Global Offensive</span>
                            <span className="game-info-header-arrow-csgo"> {this.state.arrowState === 'up' ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>} </span>
                        </div>
                        <div className="profile-game-info-fields">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="info"/>
                            </div>
                        </div>
                    </div>

                    <div className="profile-apex-legends-info">

                    </div>

                    <div className="profile-smite-info">

                    </div>

                    <div className="profile-hearthstone-info">

                    </div>
                </div>
            </div>
        );
    }
}
