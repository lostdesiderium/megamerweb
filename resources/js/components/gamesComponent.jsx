import React, { Component } from 'react';
import {Row, Col, Button, Tab} from 'react-bootstrap';
import PubgBackground from '../../assets/backgrounds/pubg_background_1920x1080.jpg';
import SmiteBackground from '../../assets/backgrounds/smite_background_1920x1080.jpg';
import ApexBackground from '../../assets/backgrounds/apex_background_1920x1080.jpg';
import HearthstoneBackground from '../../assets/backgrounds/hearthstone_background_1920x1080.jpg';
import CsgoBackground from '../../assets/backgrounds/csgo_background_1920x1080.jpg';

import Axios from 'axios';

export default class GamesPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            showGameStreamers: false,
            clickedGameName: '',
            gameStreamers: []
        }

        this.gameContentSelect = this.gameContentSelect.bind(this);
        this.fetchContent = this.fetchContent.bind(this);
        this.generateStreamersTable = this.generateStreamersTable.bind(this);
        this.expandRow = this.expandRow.bind(this);
    }

    gameContentSelect(gameName){
        this.setState( {
            clickedGameName: gameName,
        } );
        this.fetchContent(gameName);
    }

    fetchContent(gameName){
        let api_url = 'http://megamer.build/api/streamers/';
        api_url = api_url + gameName;

        Axios.get(api_url).then((response) => {return response;}).then(json => {
            if(json.request.statusText === 'OK'){

                this.setState({
                    gameStreamers: json.data.data,
                    showGameStreamers: true,
                });

            }
        }).catch(error => {
            alert(error);
        });
    }

    generateStreamersTable(){
        let usersData = this.state.gameStreamers;

        var i = 0;
        var output = [];
        for( i = 0; i < usersData.length; i++){
            output.push(<tr id={usersData[i].id}>
                <td className="streamers-table-data"> {usersData[i].streamer_name} </td>
                <td className="streamers-table-data"> <a href={usersData[i].youtube_link} target="_blank">{usersData[i].streamer_name} YouTube</a> </td>
                <td className="streamers-table-data"> <a href={usersData[i].twitch_link} target="_blank">{usersData[i].streamer_name} TwitchTV </a> </td>
                <td className="streamers-table-data"> {usersData[i].about_streamer} </td>
                <td className="streamers-table-data table-expand-symbol" onClick={this.expandRow}> + </td>
            </tr>);
            output.push(<iframe className="hidden-element" src="https://player.twitch.tv/?channel=shroud&autoplay=false" height="400" width="480" allowFullScreen="true"> </iframe>);

        }
        return output;
    }

    expandRow(){
        if(jQuery('.table-expand-symbol').hasClass("expanded")){
            jQuery('.table-expand-symbol').removeClass("expanded");
            jQuery('.expandable-element').addClass('hidden-element');
            jQuery('.hidden-element').removeClass("expandable-element");
        }
        else{
            jQuery('.hidden-element').addClass("expandable-element");
            jQuery('.table-expand-symbol').addClass('expanded')
            jQuery('.expandable-element').removeClass('hidden-element');
        }

    }

    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-games"></div>

                <div className="games-cards-container">
                    <Row className="game-cards-row">
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={PubgBackground} alt="pubg_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title">Playeruknown's battlegrounds </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate" />
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="Content/Streamers" onClick={ () => this.gameContentSelect('pubg')} />
                                </div>

                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={CsgoBackground} alt="csgo_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Counter-Strike Global Offensive </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate" />
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="Content/Streamers" onClick={ () => this.gameContentSelect('csgo')} />
                                </div>
                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={HearthstoneBackground} alt="hearthstone_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Hearthstone </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="Content/Streamers" onClick={ () => this.gameContentSelect('hearthstone')} />
                                </div>
                            </div>
                        </Col>

                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={ApexBackground} alt="apex_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Apex Legends </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="Content/Streamers" onClick={ () => this.gameContentSelect('apex_legends')} />
                                </div>
                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={SmiteBackground} alt="smite_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Smite </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="Content/Streamers" onClick={ () => this.gameContentSelect('smite')} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="streamers-table-div"><table className="streamers-table"><tbody><tr>
                                <th className="streamers-table-header table-header">Streamer nickname</th>
                                <th className="streamers-table-header table-header">Streamer YouTube link</th>
                                <th className="streamers-table-header table-header">Streamer TwitchTV link</th>
                                <th className="streamers-table-header table-header">About</th>
                                <th className="streamers-table-header table-header">Expand</th>
                            </tr>
                            { this.state.showGameStreamers ? this.generateStreamersTable() : null }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    };


}
