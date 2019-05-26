import React, { Component } from 'react';
import Axios from 'axios';
import PopupNotification from '../popupNotificationComponent';

export default class ProfileComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMessage: false,
            userNickname: '',
            userCountry: '',
            userLanguage: '',
            pubgInGameName: '',
            pubgInfoForFriendRequest: '',
            pubgSoloAvgDmg: '',
            pubgDuoAvgDmg: '',
            pubgSquadAvgDmg: '',
            csgoInGameName: '',
            csgoInfoForFriendRequest: '',
            csgoMmRank: '',
            csgoFaceitRank: '',
            apexLegendsInGameName: '',
            apexLegendsInfoForFriendRequest: '',
            apexLegendsLevel: '',
            smiteInGameName: '',
            smiteInfoForFriendRequest: '',
            smiteCurrentSeasonRank: '',
            hearthstoneInGameName: '',
            hearthstoneInfoForFriendRequest: '',
            hearthstoneHighestReachedRank: '',
        }
        this.setUserNickname = this.setUserNickname.bind(this);
        this.setUserCountry = this.setUserCountry.bind(this);
        this.setUserLanguage = this.setUserLanguage.bind(this);

        this.setPubgInGameName = this.setPubgInGameName.bind(this);
        this.setPubgInfoForFriends = this.setPubgInfoForFriends.bind(this);
        this.setPubgSoloAvgDmg = this.setPubgSoloAvgDmg.bind(this);
        this.setPubgDuoAvgDmg = this.setPubgDuoAvgDmg.bind(this);
        this.setPubgSquadAvgDmg = this.setPubgSquadAvgDmg.bind(this);
        this.setCsgoInGameName = this.setCsgoInGameName.bind(this);
        this.setCsgoInfoForFriends = this.setCsgoInfoForFriends.bind(this);
        this.setCsgoMmRank = this.setCsgoMmRank.bind(this);
        this.setCsgoFaceitRank = this.setCsgoFaceitRank.bind(this);
        this.setApexLegendsInGameName = this.setApexLegendsInGameName.bind(this);
        this.setApexLegendsInfoForFriends = this.setApexLegendsInfoForFriends.bind(this);
        this.setApexLegendsCurrentLevel = this.setApexLegendsCurrentLevel.bind(this);
        this.setSmiteInGameName = this.setSmiteInGameName.bind(this);
        this.setSmiteInfoForFriends = this.setSmiteInfoForFriends.bind(this);
        this.setSmiteCurrentSeasonRank = this.setSmiteCurrentSeasonRank.bind(this);
        this.setHearthstoneInGameName = this.setHearthstoneInGameName.bind(this);
        this.setHearthstoneInfoForFriends = this.setHearthstoneInfoForFriends.bind(this);
        this.setHearthstoneHighestReachedRank = this.setHearthstoneHighestReachedRank.bind(this);

        this.openGameFields = this.openGameFields.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
        this.profileFetch = this.profileFetch.bind(this);
    }
    // SETTING ONCHANGED INPUT VALUES TO STATE VARIABLE
    //---------------------------
    setUserNickname(e){
        this.setState({
            userNickname: e.currentTarget.value,
       });
    }
    setUserCountry(e){
        this.setState({
            userCountry: e.currentTarget.value,
       });
    }
    setUserLanguage(e){
        this.setState({
            userLanguage: e.currentTarget.value,
       });
    }
    //---------------------------

    //---------------------------
    setPubgInGameName(e){
        this.setState({
            pubgInGameName: e.currentTarget.value,
       })
    }
    setPubgInfoForFriends(e){
        this.setState({
            pubgInfoForFriendRequest: e.currentTarget.value,
       })
    }
    setPubgSoloAvgDmg(e){
        this.setState({
            pubgSoloAvgDmg: e.currentTarget.value,
       })
    }
    setPubgDuoAvgDmg(e){
        this.setState({
            pubgDuoAvgDmg: e.currentTarget.value,
       })
    }
    setPubgSquadAvgDmg(e){
        this.setState({
            pubgSquadAvgDmg: e.currentTarget.value,
       })
    }
    //---------------------------

    //---------------------------
    setCsgoInGameName(e){
        this.setState({
            csgoInGameName: e.currentTarget.value,
       })
    }
    setCsgoInfoForFriends(e){
        this.setState({
            csgoInfoForFriendRequest: e.currentTarget.value,
       })
    }
    setCsgoMmRank(e){
        this.setState({
            csgoMmRank: e.currentTarget.value,
       })
    }
    setCsgoFaceitRank(e){
        this.setState({
            csgoFaceitRank: e.currentTarget.value,
       })
    }
    //---------------------------

    //---------------------------
    setApexLegendsInGameName(e){
        this.setState({
            apexLegendsInGameName: e.currentTarget.value,
       })
    }
    setApexLegendsInfoForFriends(e){
        this.setState({
            apexLegendsInfoForFriendRequest: e.currentTarget.value,
       })
    }
    setApexLegendsCurrentLevel(e){
        this.setState({
            apexLegendsLevel: e.currentTarget.value,
       })
    }
    //---------------------------

    //---------------------------
    setSmiteInGameName(e){
        this.setState({
            smiteInGameName: e.currentTarget.value,
       })
    }
    setSmiteInfoForFriends(e){
        this.setState({
            smiteInfoForFriendRequest: e.currentTarget.value,
       })
    }
    setSmiteCurrentSeasonRank(e){
        this.setState({
            smiteCurrentSeasonRank: e.currentTarget.value,
       })
    }
    //---------------------------

    //---------------------------
    setHearthstoneInGameName(e){
        this.setState({
            hearthstoneInGameName: e.currentTarget.value,
       })
    }
    setHearthstoneInfoForFriends(e){
        this.setState({
            hearthstoneInfoForFriendRequest: e.currentTarget.value,
       })
    }
    setHearthstoneHighestReachedRank(e){
        this.setState({
            hearthstoneHighestReachedRank: e.currentTarget.value,
       })
    }
    //---------------------------
    // END SETTING ONCHANGED INPUT VALUES TO STATE VARIABLE

    openGameFields(e){
        let gameName = e.currentTarget.name;
        let gameFieldsHeaderClass = ".profile-game-info-fields-" + gameName;
        let arrowClass = ".game-info-header-arrow-" + gameName;

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

    handleProfileUpdate(e){
        e.preventDefault();

        var userMeta = new FormData();
        var userMetaUpdateURL = 'http://megamer.build/api/users/updateUserMeta' + '?token=' + this.props.user.auth_token;

        // console.log(userMeta);
        // console.log('nickname - ' + this.state.userNickname + ' country - ' + this.state.userCountry + ' language -' + this.state.userLanguage);

        userMeta.append('auth_token', this.props.user.auth_token);
        userMeta.append('user_id', this.props.user.id);
        userMeta.append('user_nickname', this.state.userNickname);
        userMeta.append('user_country', this.state.userCountry);
        userMeta.append('user_language', this.state.userLanguage);
        userMeta.append('pubg_in_game_name', this.state.pubgInGameName);
        userMeta.append('pubg_info_for_friend_request', this.state.pubgInfoForFriendRequest);
        userMeta.append('solo_avg_dmg', this.state.pubgSoloAvgDmg);
        userMeta.append('duo_avg_dmg', this.state.pubgDuoAvgDmg);
        userMeta.append('squad_avg_dmg', this.state.pubgSquadAvgDmg);
        userMeta.append('csgo_in_game_name', this.state.csgoInGameName);
        userMeta.append('csgo_info_for_friend_request', this.state.csgoInfoForFriendRequest);
        userMeta.append('mm_rank', this.state.csgoMmRank);
        userMeta.append('faceit_rank', this.state.csgoFaceitRank);
        userMeta.append('apex_legends_in_game_name', this.state.apexLegendsInGameName);
        userMeta.append('apex_legends_info_for_friend_request', this.state.apexLegendsInfoForFriendRequest);
        userMeta.append('apex_legends_level', this.state.apexLegendsLevel);
        userMeta.append('smite_in_game_name', this.state.smiteInGameName);
        userMeta.append('smite_info_for_friend_request', this.state.smiteInfoForFriendRequest);
        userMeta.append('smite_season_rank', this.state.smiteCurrentSeasonRank);
        userMeta.append('hearthstone_in_game_name', this.state.hearthstoneInGameName);
        userMeta.append('hearthstone_info_for_friend_request', this.state.hearthstoneInfoForFriendRequest);
        userMeta.append('hearthstone_highest_rank', this.state.hearthstoneHighestReachedRank);

        Axios.post(`http://megamer.build/api/users/updateUserMeta?token=${this.props.user.auth_token}`, userMeta).then( (json) => {
            this.setState({
                showMessage: true,
            });
            // hide pop-up box from user
            setTimeout( () => {
                this.setState({
                    showMessage: false,
                });
            },3000);
        })
    }

    profileFetch(){
        let userMetaUpdateURL = 'http://megamer.build/api/users/getUserMeta/' + this.props.user.id + '/' + '?token=' + this.props.user.auth_token;

        Axios.get(userMetaUpdateURL).then( (response) => {
            // console.log(response);
            for(var key in response.data.data){
                if(response.data.data.hasOwnProperty(key)){
                    if(response.data.data[key] == 'null' || response.data.data[key] == 'undefined' || response.data.data[key] == null ){
                        response.data.data[key] = '';
                    }
                }
            }

            this.setState({
                userNickname: response.data.data.user_nickname,
                userCountry: response.data.data.user_country,
                userLanguage: response.data.data.user_language,
                pubgInGameName: response.data.data.pubg_in_game_name,
                pubgInfoForFriendRequest: response.data.data.pubg_info_for_friend_request,
                pubgSoloAvgDmg: response.data.data.solo_avg_dmg,
                pubgDuoAvgDmg: response.data.data.duo_avg_dmg,
                pubgSquadAvgDmg: response.data.data.squad_avg_dmg,
                csgoInGameName: response.data.data.csgo_in_game_name,
                csgoInfoForFriendRequest: response.data.data.csgo_info_for_friend_request,
                csgoMmRank: response.data.data.mm_rank,
                csgoFaceitRank: response.data.data.faceit_rank,
                apexLegendsInGameName: response.data.data.apex_legends_in_game_name,
                apexLegendsInfoForFriendRequest: response.data.data.apex_legends_info_for_friend_request,
                apexLegendsLevel: response.data.data.apex_legends_level,
                smiteInGameName: response.data.data.smite_in_game_name,
                smiteInfoForFriendRequest: response.data.data.smite_info_for_friend_request,
                smiteCurrentSeasonRank: response.data.data.smite_season_rank,
                hearthstoneInGameName: response.data.data.hearthstone_in_game_name,
                hearthstoneInfoForFriendRequest: response.data.data.hearthstone_info_for_friend_request,
                hearthstoneHighestReachedRank: response.data.data.hearthstone_highest_rank,
            });
        });
    }

    componentWillMount(){
        if(this.props.isLoggedIn !== true){
            this.props.history.push('/');
        }
        else{
            this.profileFetch();
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
                            <input type="text" name="user-nick-name" placeholder="Nickname" value={this.state.userNickname}
                                onChange={this.setUserNickname}/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="user-country">Country</label>
                            <input type="text" name="user-country" placeholder="Country" value={this.state.userCountry}
                                onChange={this.setUserCountry}/>
                        </div>
                        <div className="user-field">
                            <label htmlFor="user-language">Prefferable language</label>
                            <input type="text" name="user-language" placeholder="Prefferable language" value={this.state.userLanguage}
                                onChange={this.setUserLanguage}/>
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
                                <input type="text" name="in-game-name" placeholder="In-game name" value={this.state.pubgInGameName}
                                onChange={this.setPubgInGameName}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"
                                value={this.state.pubgInfoForFriendRequest}
                                onChange={this.setPubgInfoForFriends} />
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-solo-rank">Solo Avg. Damage</label>
                                <input type="text" name="pubg-solo-rank" placeholder="Solo Avg. Damage"
                                value={this.state.pubgSoloAvgDmg}
                                onChange={this.setPubgSoloAvgDmg}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-duo-rank">Duo Avg. Damage</label>
                                <input type="text" name="pubg-duo-rank" placeholder="Duo Avg. Damage"
                                value={this.state.pubgDuoAvgDmg}
                                onChange={this.setPubgDuoAvgDmg}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="pubg-squad-rank">Squad Avg. Damage</label>
                                <input type="text" name="pubg-squad-rank" placeholder="Squad Avg. Damage"
                                value={this.state.pubgSquadAvgDmg}
                                onChange={this.setPubgSquadAvgDmg}/>
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
                                <input type="text" name="in-game-name" placeholder="In-game name"
                                value={this.state.csgoInGameName}
                                onChange={this.setCsgoInGameName}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"
                                value={this.state.csgoInfoForFriendRequest}
                                onChange={this.setCsgoInfoForFriends}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="matchmaking-rank">Matchmaking rank</label>
                                {/* <input type="select" name="matchmaking-rank" placeholder="Matchmaking rank"/> */}
                                <select value={this.state.csgoMmRank} name="csgo-rank-select" className="csgo-rank-select" onChange={this.setCsgoMmRank}>
                                    <option value="Silver I">Silver I</option>
                                    <option value="Silver II">Silver II</option>
                                    <option value="Silver III">Silver III</option>
                                    <option value="Silver IV">Silver IV</option>
                                    <option value="Silver V">Silver V</option>
                                    <option value="Silver Elite">Silver Elite</option>
                                    <option value="Silver Elite Master">Silver Elite Master</option>
                                    <option value="Gold Nova I">Gold Nova I</option>
                                    <option value="Gold Nova II">Gold Nova II</option>
                                    <option value="Gold Nova III">Gold Nova III</option>
                                    <option value="Gold Nova Master">Gold Nova Master</option>
                                    <option value="Master Guardian I">Master Guardian I</option>
                                    <option value="Master Guardian II">Master Guardian II</option>
                                    <option value="Master Guardian Elite">Master Guardian Elite</option>
                                    <option value="Distinguished Master Guardian">Distinguished Master Guardian</option>
                                    <option value="Legendary Eagle">Legendary Eagle</option>
                                    <option value="Legendary Eagle Master">Legendary Eagle Master</option>
                                    <option value="Supreme Master First Class">Supreme Master First Class</option>
                                    <option value="The Global Elite">The Global Elite</option>
                                </select>
                            </div>
                            <div className="user-field">
                                <label htmlFor="faceit-rank">Faceit rank</label>
                                {/* <input type="text" name="faceit-rank" placeholder="Faceit rank"/> */}
                                <select value={this.state.csgoFaceitRank} name="csgo-faceit-ranks" className="csgo-faceit-ranks" onChange={this.setCsgoFaceitRank}>
                                    <option value="Level 1">Level 1</option>
                                    <option value="Level 2">Level 2</option>
                                    <option value="Level 3">Level 3</option>
                                    <option value="Level 4">Level 4</option>
                                    <option value="Level 5">Level 5</option>
                                    <option value="Level 6">Level 6</option>
                                    <option value="Level 7">Level 7</option>
                                    <option value="Level 8">Level 8</option>
                                    <option value="Level 9">Level 9</option>
                                    <option value="Level 10">Level 10</option>
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
                                <input type="text" name="in-game-name" placeholder="In-game name"
                                value={this.state.apexLegendsInGameName}
                                onChange={this.setApexLegendsInGameName}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"
                                value={this.state.apexLegendsInfoForFriendRequest}
                                onChange={this.setApexLegendsInfoForFriends}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="apex-legends-level">Apex Legends level</label>
                                <input type="text" name="apex-legends-level" placeholder="Apex Legends level"
                                value={this.state.apexLegendsLevel}
                                onChange={this.setApexLegendsCurrentLevel}/>
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
                                <input type="text" name="in-game-name" placeholder="In-game name"
                                value={this.state.smiteInGameName}
                                onChange={this.setSmiteInGameName}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"
                                value={this.state.smiteInfoForFriendRequest}
                                onChange={this.setSmiteInfoForFriends}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="smite-season-rank">Current season rank</label>
                                <input type="text" name="smite-season-rank" placeholder="Current season rank"
                                value={this.state.smiteCurrentSeasonRank}
                                onChange={this.setSmiteCurrentSeasonRank}/>
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
                                <input type="text" name="in-game-name" placeholder="In-game name"
                                value={this.state.hearthstoneInGameName}
                                onChange={this.setHearthstoneInGameName}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="friend-request-info">Required info for friend request</label>
                                <input type="text" name="friend-request-info" placeholder="Info for friend request"
                                value={this.state.hearthstoneInfoForFriendRequest}
                                onChange={this.setHearthstoneInfoForFriends}/>
                            </div>
                            <div className="user-field">
                                <label htmlFor="highest-recent-rank">Highest reached rank in 3 months</label>
                                <input type="text" name="highest-recent-rank" placeholder="Highest reached rank in 3 months"
                                value={this.state.hearthstoneHighestReachedRank}
                                onChange={this.setHearthstoneHighestReachedRank}/>
                            </div>
                        </div>
                    </div>

                    <div className="submit-button-wrapper">
                        <input className="submit-button" type="submit" name="update-user-profile" value="Update profile"
                        onClick={this.handleProfileUpdate} />
                    </div>
                </section>

                {this.state.showMessage && <PopupNotification message='Updated profile successfully!' messageTitle='' messageType='success' /> }
            </div>
        );
    }
}
