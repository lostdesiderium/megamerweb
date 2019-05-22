import React, { Component } from 'react';

export default class ProfileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrowState: 'up',
        }

        this.openGameFields = this.openGameFields.bind(this);
    }

    openGameFields(e){
        let gameName = e.currentTarget.name;
        let gameFieldsHeaderClass = ".profile-game-info-fields-" + gameName;
        let arrowClass = ".game-info-header-arrow-" + gameName;
        console.log(arrowClass);

        if(jQuery(gameFieldsHeaderClass).css('height') === 'auto' || jQuery(gameFieldsHeaderClass).height() > 0){
            jQuery(gameFieldsHeaderClass).css({
                height: '0',
            });
            jQuery(arrowClass).html("<i class='fas fa-chevron-down'></i>");
        }
        else{
            jQuery(gameFieldsHeaderClass).css({
                height: 'auto',
            });
            jQuery(arrowClass).html("<i class='fas fa-chevron-up'></i>");
        }
    }

    componentWillMount(){
        if(this.props.isLoggedIn !== true){
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-login"></div>

                <section className="profile-div">
                    <div className="profile-page-title">{this.props.user.username} profile</div>

                    <div className="info-area profile-general-info">
                        <div className="user-field">
                            <label htmlFor="user-nick-name">Nickname</label>
                            <input type="text" name="user-nick-name" placeholder="Nickname"/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="user-country">Country</label>
                            <input type="text" name="user-country" placeholder="Country"/>
                        </div>
                    </div>


                    <div className="info-area">
                        <div className="profile-game-info-header" ><input type="button" name="pubg" onClick={this.openGameFields}/>
                            <span className="game-info-header-title">Playerunknown's Battleground</span>
                            <span className="game-info-header-arrow-default"> <span className="game-info-header-arrow-pubg"><i className="fas fa-chevron-down"></i></span> </span>
                        </div>
                        <div className="profile-game-info-fields profile-game-info-fields-pubg">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-solo-rank">Solo Avg. Damage</label>
                                <input type="text" name="pubg-solo-rank" placeholder="Solo Avg. Damage"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-duo-rank">Duo Avg. Damage</label>
                                <input type="text" name="pubg-duo-rank" placeholder="Duo Avg. Damage"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-squad-rank">Squad Avg. Damage</label>
                                <input type="text" name="pubg-squad-rank" placeholder="Squad Avg. Damage"/>
                            </div>
                            <div className="help-info">
                                You can find information about your stats overhere --> <a href="https://pubg.op.gg/" target="_blank">https://pubg.op.gg/</a>
                            </div>
                        </div>
                    </div>


                    <div className="info-area">
                        <div className="profile-game-info-header" ><input type="button" name="csgo" onClick={this.openGameFields}/>
                            <span className="game-info-header-title">Counter-Strike Global Offensive</span>
                            <span className="game-info-header-arrow-default game-info-header-arrow-csgo"> <i className="fas fa-chevron-down"></i> </span>
                        </div>
                        <div className="profile-game-info-fields profile-game-info-fields-csgo">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="matchmaking-rank">Matchmaking rank</label>
                                {/* <input type="select" name="matchmaking-rank" placeholder="Matchmaking rank"/> */}
                                <select name="csgo-rank-select" className="csgo-rank-select">
                                    <option value="silver-1">Silver I</option>
                                    <option value="silver-2">Silver II</option>
                                    <option value="silver-3">Silver III</option>
                                    <option value="silver-4">Silver III</option>
                                    <option value="silver-5">Silver IV</option>
                                    <option value="silver-6">Silver Elite</option>
                                    <option value="silver-7">Silver Elite Master</option>
                                    <option value="gold-1">Gold Nova I</option>
                                    <option value="gold-2">Gold Nova II</option>
                                    <option value="gold-3">Gold Nova III</option>
                                    <option value="gold-4">Gold Nova Master</option>
                                    <option value="master-1">Master Guardian I</option>
                                    <option value="master-2">Master Guardian II</option>
                                    <option value="master-3">Master Guardian Elite</option>
                                    <option value="master-4">Distinguished Master Guardian</option>
                                    <option value="eagle-1">Legendary Eagle</option>
                                    <option value="eagle-2">Legendary Eagle Master</option>
                                    <option value="supreme">Supreme Master First Class</option>
                                    <option value="global">The Global Elite</option>
                                </select>
                            </div>
                            <div className="user-field">
                                <label htmlFor="faceit-rank">Faceit rank</label>
                                {/* <input type="text" name="faceit-rank" placeholder="Faceit rank"/> */}
                                <select name="csgo-faceit-ranks" className="csgo-faceit-ranks">
                                    <option value="level-1">Level 1</option>
                                    <option value="level-2">Level 2</option>
                                    <option value="level-3">Level 3</option>
                                    <option value="level-4">Level 4</option>
                                    <option value="level-5">Level 5</option>
                                    <option value="level-6">Level 6</option>
                                    <option value="level-7">Level 7</option>
                                    <option value="level-8">Level 8</option>
                                    <option value="level-9">Level 9</option>
                                    <option value="level-10">Level 10</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="info-area">
                        <div className="profile-game-info-header" ><input type="button" name="apex_legends" onClick={this.openGameFields}/>
                            <span className="game-info-header-title">Apex Legends</span>
                            <span className="game-info-header-arrow-default game-info-header-arrow-apex_legends"> <i className="fas fa-chevron-down"></i> </span>
                        </div>
                        <div className="profile-game-info-fields profile-game-info-fields-apex_legends">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="apex-legends-level">Apex Legends level</label>
                                <input type="text" name="apex-legends-level" placeholder="Apex Legends level"/>
                            </div>
                        </div>
                    </div>


                    <div className="info-area">
                        <div className="profile-game-info-header" ><input type="button" name="smite" onClick={this.openGameFields}/>
                            <span className="game-info-header-title">Smite</span>
                            <span className="game-info-header-arrow-default game-info-header-arrow-smite"> <i className="fas fa-chevron-down"></i> </span>
                        </div>
                        <div className="profile-game-info-fields profile-game-info-fields-smite">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="smite-season-rank">Current season rank</label>
                                <input type="text" name="smite-season-rank" placeholder="Current season rank"/>
                            </div>
                        </div>
                    </div>

                    <div className="info-area">
                        <div className="profile-game-info-header" ><input type="button" name="hearthstone" onClick={this.openGameFields}/>
                            <span className="game-info-header-title">Hearthstone</span>
                            <span className="game-info-header-arrow-default game-info-header-arrow-hearthstone"> <i className="fas fa-chevron-down"></i> </span>
                        </div>
                        <div className="profile-game-info-fields profile-game-info-fields-hearthstone">
                            <div className="user-field">
                                <label htmlFor="in-game-name">In-game name</label>
                                <input type="text" name="in-game-name" placeholder="In-game name"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="highest-recent-rank">Highest reached rank in 3 months</label>
                                <input type="text" name="highest-recent-rank" placeholder="Highest reached rank in 3 months"/>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        );
    }
}
