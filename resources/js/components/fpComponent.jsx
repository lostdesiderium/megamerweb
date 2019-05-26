import React, { Component } from 'react';
import PopupNotification from './popupNotificationComponent';
import Axios from 'axios';
import UserCard from './presentationalComponents/userCardComponent';
import { FormText } from 'react-bootstrap';
import { parse } from 'url';

export default class FpPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            usersProfilesData: [],
            showMessage: false,
            selectedGame: 'pubg',
            showFetchedProfiles: false,
            showUserInfoPopup: false,
            currentSelectedUserId: '', // selected user id when expanding user info
            currentUserId: this.props.user.id, // user which navigates through web
        }
        this.selectionOfGame = this.selectionOfGame.bind(this);
        this.setAndReturnMessage = this.setAndReturnMessage.bind(this);
        this.handleProfilesMatching = this.handleProfilesMatching.bind(this);
        this.returnUsersCards = this.returnUsersCards.bind(this);
        this.callbackFromUserCard = this.callbackFromUserCard.bind(this);
        this.returnUserInfoPopup = this.returnUserInfoPopup.bind(this);
        this.filterSimilarProfiles = this.filterSimilarProfiles.bind(this);
    }

    selectionOfGame(e){
        var currentGame = e.currentTarget.value;
        this.setState({
            selectedGame: currentGame,
        })
    }

    handleProfilesMatching(){
        let usersProfilesURL = "http://megamer.build/api/users/getAllUsersMeta?token=" + this.props.user.auth_token;
        var filteredArray = [];

        Axios.get(usersProfilesURL).then( (response) => {
                if(response.request.statusText === 'OK'){
                    this.filterSimilarProfiles(response.data.data);
                }
                return;
            }
        ).catch(error => {
            console.log(`Error occured while getting data from server - ${error}`);
        });
    }

    filterSimilarProfiles(userProfiles){
        let currentUserProfileURL = "http://megamer.build/api/users/getUserMeta/" + this.state.currentUserId + "?token=" + this.props.user.auth_token;
        let currentUserProfile = {};
        let filteredArray = [];
        Axios.get(currentUserProfileURL).then( (response) => {
            currentUserProfile = response.data.data;
            for(let i = 0; i < userProfiles.length; i++){
                if(userProfiles[i].user_id != this.state.currentUserId){

                    if(this.state.selectedGame === 'pubg'){
                        console.log('checking if comes to pubg -' + this.state.selectedGame);
                        let currentUserSoloDamageUp = parseInt(currentUserProfile.solo_avg_dmg) + 20;
                        let currentUserSoloDamageDown = parseInt(currentUserProfile.solo_avg_dmg) - 20;

                        let currentUserDuoDamageUp = parseInt(currentUserProfile.duo_avg_dmg) + 20;
                        let currentUserDuoDamageDown = parseInt(currentUserProfile.duo_avg_dmg) - 20;

                        let currentUserSquadDamageUp = parseInt(currentUserProfile.squad_avg_dmg) + 20;
                        let currentUserSquadDamageDown = parseInt(currentUserProfile.squad_avg_dmg) - 20;

                        if( parseInt(userProfiles[i].solo_avg_dmg) >= currentUserSoloDamageDown  &&
                            parseInt(userProfiles[i].solo_avg_dmg) <= currentUserSoloDamageUp ){
                                filteredArray.push(userProfiles[i]);
                        }
                        else if( parseInt(userProfiles[i].duo_avg_dmg) >= currentUserDuoDamageDown &&
                                parseInt(userProfiles[i].duo_avg_dmg) <= currentUserDuoDamageUp ){
                            filteredArray.push(userProfiles[i]);
                        }
                        else if( parseInt(userProfiles[i].squad_avg_dmg) >= currentUserSquadDamageDown &&
                                parseInt(userProfiles[i].squad_avg_dmg) <= currentUserSquadDamageUp ){
                            filteredArray.push(userProfiles[i]);
                        }
                        else{

                        }
                    }
                    else if(this.state.selectedGame === 'csgo'){
                        console.log('checking if comes to csgo -' + this.state.selectedGame);
                        let currentUserMmRank = currentUserProfile.mm_rank;
                        let currentUserFaceitRank = currentUserProfile.faceit_rank;

                        if( currentUserMmRank === userProfiles[i].mm_rank ){
                            filteredArray.push(userProfiles[i]);
                        }
                        else if( currentUserFaceitRank === userProfiles[i].faceit_rank ){
                            filteredArray.push(userProfiles[i]);
                        }
                        else{

                        }
                    }
                    else if(this.state.selectedGame === 'smite'){
                        console.log('checking if comes to smite -' + this.state.selectedGame);
                        let currentUserSmiteRank = currentUserProfile.smite_season_rank;

                        if( currentUserSmiteRank === userProfiles[i].smite_season_rank ){
                            filteredArray.push(userProfiles[i]);
                        }
                    }
                    else if(this.state.selectedGame === 'hearthstone'){
                        console.log('checking if comes to hs - ' + this.state.selectedGame);
                        let currentUserHighestRank = currentUserProfile.hearthstone_highest_rank;

                        if( parseInt(userProfiles[i].hearthstone_highest_rank) >= (parseInt(currentUserHighestRank) - 2) &&
                            parseInt(userProfiles[i].hearthstone_highest_rank) <= (parseInt(currentUserHighestRank) + 2) ){
                            filteredArray.push(userProfiles[i]);
                            }
                    }
                    else {
                        console.log('checking if comes to apex - ' + this.state.selectedGame);
                        let currentUserApexLevel = currentUserProfile.apex_legends_level;
                        if( parseInt(userProfiles[i].apex_legends_level) >= (parseInt(currentUserApexLevel) - 5) &&
                            parseInt(userProfiles[i].apex_legends_level) <= (parseInt(currentUserApexLevel) + 5)){
                            filteredArray.push(userProfiles[i]);
                        }
                    }
                }
            }
            this.setState({
                usersProfilesData: filteredArray,
                showFetchedProfiles: true,
            });

        }).catch( (error) => {
            console.log('Error occured while getting data from server - ' + error);
        });

        return filteredArray;
    }

    returnUsersCards(){
        let dataArrayInJSX = [];

        for(let i = 0; i < this.state.usersProfilesData.length; i++ ){
            dataArrayInJSX.push(
                <UserCard
                    userId={this.state.usersProfilesData[i].user_id}
                    userNickname={this.state.usersProfilesData[i].user_nickname}
                    userCountry={this.state.usersProfilesData[i].user_country}
                    userLanguage={this.state.usersProfilesData[i].user_language}
                    userPopupCallback={this.callbackFromUserCard}
                />
            );
        }
        if(dataArrayInJSX.length == 0){
            dataArrayInJSX.push(<div className="not-found">Sorry, but we could not find anyone with similar profile like your, try another game!</div>);
        }

        return dataArrayInJSX;
    }

    returnUserInfoPopup(){
        let userData = {};
        for(let i = 0; i < this.state.usersProfilesData.length; i++){
            if(this.state.usersProfilesData[i].user_id === this.state.currentSelectedUserId){
                userData = this.state.usersProfilesData[i];
            }
        }
        let userJSX = [];
        if(this.state.selectedGame == 'pubg'){
            userJSX.push( <div className="user-info-popup">
            <div className="user-info-background" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } }>
            </div>
            <span className="user-info-popup-close-btn" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } } >  <i className="fas fa-window-close close-fa-icon"></i>
            </span>
            <div className="user-info">
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Nickname </label>
                    <span className="user-info-piece"> {userData.user_nickname} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Country </label>
                    <span className="user-info-piece"> {userData.user_country} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Language </label>
                    <span className="user-info-piece"> {userData.user_language} </span>
                </div>

                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">PUBG name </label>
                    <span className="user-info-piece"> {userData.pubg_in_game_name} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">PUBG info for friend request </label>
                    <span className="user-info-piece"> {userData.pubg_info_for_friend_request} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">PUBG SOLO average damage </label>
                    <span className="user-info-piece"> {userData.solo_avg_dmg} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">PUBG DUO average damage </label>
                    <span className="user-info-piece"> {userData.duo_avg_dmg} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">PUBG SQUADs average damage </label>
                    <span className="user-info-piece"> {userData.squad_avg_dmg} </span>
                </div>


            </div>
        </div> );
        }
        else if(this.state.selectedGame == 'csgo'){
            userJSX.push(<div className="user-info-popup">
            <div className="user-info-background" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } }>
            </div>
            <span className="user-info-popup-close-btn" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } } >  <i className="fas fa-window-close close-fa-icon"></i>
            </span>
            <div className="user-info">
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Nickname </label>
                    <span className="user-info-piece"> {userData.user_nickname} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Country </label>
                    <span className="user-info-piece"> {userData.user_country} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Language </label>
                    <span className="user-info-piece"> {userData.user_language} </span>
                </div>

                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> CSGO name </label>
                    <span className="user-info-piece"> {userData.csgo_in_game_name} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">CSGO info for friend request </label>
                    <span className="user-info-piece"> {userData.csgo_info_for_friend_request} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">CSGO Matchmaking rank </label>
                    <span className="user-info-piece"> {userData.mm_rank} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">CSGO Faceit rank </label>
                    <span className="user-info-piece"> {userData.faceit_rank} </span>
                </div>

            </div>
        </div> );
        }
        else if(this.state.selectedGame == 'smite'){
            userJSX.push(<div className="user-info-popup">
            <div className="user-info-background" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } }>
            </div>
            <span className="user-info-popup-close-btn" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } } >  <i className="fas fa-window-close close-fa-icon"></i>
            </span>
            <div className="user-info">
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Nickname </label>
                    <span className="user-info-piece"> {userData.user_nickname} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Country </label>
                    <span className="user-info-piece"> {userData.user_country} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Language </label>
                    <span className="user-info-piece"> {userData.user_language} </span>
                </div>


                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Smite name </label>
                    <span className="user-info-piece"> {userData.smite_in_game_name} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Smite info for friend request </label>
                    <span className="user-info-piece"> {userData.smite_info_for_friend_request} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Smite current season rank </label>
                    <span className="user-info-piece"> {userData.smite_season_rank} </span>
                </div>

            </div>
        </div> );
        }
        else if(this.state.selectedGame == 'hearhstone'){
            userJSX.push(<div className="user-info-popup">
            <div className="user-info-background" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } }>
            </div>
            <span className="user-info-popup-close-btn" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } } >  <i className="fas fa-window-close close-fa-icon"></i>
            </span>
            <div className="user-info">
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Nickname </label>
                    <span className="user-info-piece"> {userData.user_nickname} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Country </label>
                    <span className="user-info-piece"> {userData.user_country} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Language </label>
                    <span className="user-info-piece"> {userData.user_language} </span>
                </div>

                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Hearthstone name </label>
                    <span className="user-info-piece"> {userData.hearthstone_in_game_name} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Hearthstone info for friend request -</label>
                    <span className="user-info-piece"> {userData.hearthstone_info_for_friend_request} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Hearthstone highest rank (3 past months) -</label>
                    <span className="user-info-piece"> {userData.hearthstone_highest_rank} </span>
                </div>
            </div>
        </div> );
        }
        else{
            userJSX.push(<div className="user-info-popup">
            <div className="user-info-background" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } }>
            </div>
            <span className="user-info-popup-close-btn" onClick={ () => {
                        this.setState({
                            showUserInfoPopup:false,
                        });
                    } } >  <i className="fas fa-window-close close-fa-icon"></i>
            </span>
            <div className="user-info">
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Nickname </label>
                    <span className="user-info-piece"> {userData.user_nickname} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Country </label>
                    <span className="user-info-piece"> {userData.user_country} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label">Language </label>
                    <span className="user-info-piece"> {userData.user_language} </span>
                </div>

                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Apex Legends name </label>
                    <span className="user-info-piece"> {userData.apex_legends_in_game_name} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Apex Legends info for friend request </label>
                    <span className="user-info-piece"> {userData.apex_legends_info_for_friend_request} </span>
                </div>
                <div className="user-info-piece-row">
                    <label className="user-info-piece-label"> Apex Legends level </label>
                    <span className="user-info-piece"> {userData.apex_legends_level} </span>
                </div>

            </div>
        </div> );
        }
        return userJSX;
    }

    callbackFromUserCard(userId){
        this.setState({
            currentSelectedUserId: userId,
            showUserInfoPopup: true,
        });
    }

    setAndReturnMessage(msg, msgTitle, msgType){
        return <PopupNotification message={msg} messageTitle={msgTitle} messageType={msgType} />;
    }

    componentWillMount(){
        // Check if user is logged in to show content
        let userLoggedIn = this.props.isLoggedIn;

        if(userLoggedIn === false){
            this.setState({
                showMessage: true,
            });
            setTimeout( () => {
                this.setState({
                    showMessage: false,
                });
                this.props.history.push('/'); // If user is not logged in redirect him to login page
            }, 2000);
        }
    }



    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-fp"></div>

                <div className="profile-div">
                    <div className="profile-general-info">
                        <div className="user-field">
                            <label htmlFor="select-game">Select a game</label>
                            <select value={this.state.selectedGame} name="select-game" className="select-game" onChange={this.selectionOfGame}>
                                <option value="pubg" >Playerunknown's Battlegrounds</option>
                                <option value="csgo">Counter-Strike Global Offensive</option>
                                <option value="apex_ledends">Apex Legends</option>
                                <option value="smite">Smite</option>
                                <option value="hearthstone">Hearthstone</option>
                            </select>
                        </div>
                        <div className="help-info">
                            Select in which game you are looking for partner(s)
                        </div>

                        <div className="submit-button-wrapper">
                            <input className="submit-button" type="submit" value="Find some fellas" onClick={this.handleProfilesMatching}/>
                        </div>
                        <div className="big-top-margin"></div>
                        <div className="row">
                            {this.state.showFetchedProfiles && this.returnUsersCards() }
                        </div>

                    </div>
                </div>
                {this.state.showUserInfoPopup && this.returnUserInfoPopup() }

                {this.state.showMessage && this.setAndReturnMessage('In order to find a friend you have to sign in and fill your profile', 'Sign in', 'warning') }
            </div>
        );
    };


}
