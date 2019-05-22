import React, { Component } from 'react';
import {Nav} from 'react-router-dom';
import Axios from 'axios';

import PubgLogo from '../../assets/logos/pubg_logo.png';
import CsgoLogo from '../../assets/logos/csgo_logo.png';
import SmiteLogo from '../../assets/logos/smite_logo.png';
import ApexLogo from '../../assets/logos/apex_logo.png';
import HearthstoneLogo from '../../assets/logos/hearthstone_logo_2.png';

export default class NewsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPatches: false,
            showNews: false,
            whichSectionToShow: 'patches',
            gameName: 'pubg',
            patchesData: [],
            newsData: [],
        }

        this.getPatchesCards = this.getPatchesCards.bind(this);
        this.createPatchesCards = this.createPatchesCards.bind(this);
        this.gameSelect = this.gameSelect.bind(this);
        this.contentSelect = this.contentSelect.bind(this);
        this.getNewsCards = this.getNewsCards.bind(this);
    }

    gameSelect(gameName){
        if(this.state.gameName == gameName){
            return;
        }
        var currentGameName = gameName;

        var currentLiId = "#" + gameName + "-li-image";
        // add current active game name
        jQuery(currentLiId).addClass('active-game');
        // check if there are other selected game and remove class
        var pastId = "#" + this.state.gameName + "-li-image";
        if(jQuery(pastId).hasClass('active-game')){
            jQuery(pastId).removeClass('active-game');
        }
        this.setState(() => {
            this.state.gameName = currentGameName;
            if(this.state.showPatches){
                this.getPatchesCards();
            }
            else if(this.state.showNews){
                this.getNewsCards();
            }

        });
    }

    contentSelect(currentSection){
        var currentLiId = "#" + currentSection + "-content";
        var pastId = "#" + this.state.whichSectionToShow + "-content";
        // check if there are other selected game and remove class
        if(currentSection != this.state.whichSectionToShow){
            if(jQuery(pastId).hasClass('active-content')){
                jQuery(pastId).removeClass('active-content');
            }
        }
        jQuery(currentLiId).addClass('active-content');
        // add current active game name


        if(this.state.whichSectionToShow == currentSection){
            return;
        }
        currentSection;
        this.setState(() => {
            this.state.whichSectionToShow = currentSection;
            this.getNewsCards();
        });
    }


    getPatchesCards(){

        var selectedGame = this.state.gameName;

        let url = "http://megamer.build/api/patches/" + selectedGame;

        Axios.get(url)
        .then( (json) => {
            if(json.request.statusText === 'OK'){

                this.setState({
                    patchesData: json.data.data,
                    showPatches: true,
                    showNews: false,
                });

            }
        } ).catch( (error) => {
            console.log(error);
        })
    }

    createPatchesCards(){
        var gamesPatches = this.state.patchesData;
        var patchesCardTemp = [];
        var i = 0;
        for(i = 0; i < gamesPatches.length; i++){
            patchesCardTemp.push(
            <div key={gamesPatches[i].id} className="patch-card">
                <div className="patch-card-left-square">
                    <div key={gamesPatches[i].patch_name} className="patch-name"> {gamesPatches[i].patch_name} </div>
                    <div key={gamesPatches[i].published_date} className="patch-publish-date"> <span>Publish date - </span> {gamesPatches[i].pusblished_date.split(" ", 1)} </div>
                    <div key={gamesPatches[i].release_date} className="patch-release-date"> <span>Release date - </span> {gamesPatches[i].release_date.split(" ", 1)} </div>
                </div>
                <div key={gamesPatches[i].patch_content} className="patch-content"> {gamesPatches[i].patch_content} </div>
                <div key={gamesPatches[i].resources_link} className="patch-resource-link"> <span>Resource link - </span> {gamesPatches[i].resources_link} </div>
            </div>
            );
        }
        return patchesCardTemp;
    }

    getNewsCards(){

        var selectedGame = this.state.gameName;

        let url = "http://megamer.build/api/news/" + selectedGame;

        Axios.get(url)
        .then( (json) => {
            if(json.request.statusText === 'OK'){
                this.setState({
                    newsData: json.data.data,
                    showNews: true,
                    showPatches: false,
                });
            }
        } ).catch( (error) => {
            console.log(error);
        })
    }

    createNewsCards(){
        var gamesNews = this.state.newsData;
        var newsCardsTemp = [];
        var i = 0;
        for(i = 0; i < gamesNews.length; i++){
            newsCardsTemp.push(
            <div key={gamesNews[i].id} className="news-card">
                <div className="news-card-left-square">
                    <div key={gamesNews[i].news_name} className="news-name"> {gamesNews[i].news_name} </div>
                    <div key={gamesNews[i].pusblished_date} className="news-publish-date"> <span> Publish date - </span> {gamesNews[i].pusblished_date.split(' ', 1)} </div>
                    <div key={gamesNews[i].event_start} className="news-release-date"> <span> Event time - </span> {gamesNews[i].event_start} </div>
                </div>
                <div key={gamesNews[i].news_content} className="news-content"> {gamesNews[i].news_content} </div>
                <div key={gamesNews[i].resources_link} className="news-resource-link"> <span> Resource link - </span> {gamesNews[i].resources_link} </div>

            </div>
            );
        }
        return newsCardsTemp;
    }


    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-news"></div>

                <div className="games-choice-top-bar">
                    <ul>
                        <li className="active-game" id="pubg-li-image"><img src={PubgLogo} alt="pubg_logo" name="pubg" onClick={() => this.gameSelect('pubg')}/></li>
                        <li id="csgo-li-image"><img src={CsgoLogo} alt="csgo_logo" name="csgo" onClick={ () => this.gameSelect('csgo')}/></li>
                        <li id="smite-li-image"><img src={SmiteLogo} alt="smite_logo" name="smite" onClick={ () => this.gameSelect('smite')}/></li>
                        <li id="apex_legends-li-image"><img src={ApexLogo} alt="apex_legends_logo" name="apex_legends" onClick={ () => this.gameSelect('apex_legends')}/></li>
                        <li id="hearthstone-li-image"><img src={HearthstoneLogo} alt="hearthstone_logo" name="hearthstone" onClick={ () => this.gameSelect('hearthstone')}/></li>
                    </ul>
                </div>
                <div className="news-choice-side-bar">
                    <ul className="news-ul">
                        <li id="patches-content" className="active-content" onClick={() => this.contentSelect('patches')}><a href="#"> Patches </a></li>
                        <li id="news-content" onClick={() => this.contentSelect('news')}><a href="#"> Events </a></li>
                    </ul>
                </div>
                <div className="appended-data">
                    {this.state.whichSectionToShow == 'patches' ? this.state.showPatches ? this.createPatchesCards() : this.getPatchesCards()
                    : this.state.showNews ? this.createNewsCards() : this.getNewsCards()}
                </div>

            </div>
        );
    };


}
