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
        this.myRef=null;
        this.state = {
            showGameStreamers: false,
            clickedGameName: '',
            gameStreamers: [],
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
            var expandClass = "streamer-table-data table-expand-symbol table-expand-symbol-" + usersData[i].streamer_name;
            var hiddenElementClass = "hidden-element hideable-element-" + usersData[i].streamer_name;
            var streamerName = usersData[i].streamer_name;
            var twitchPlayerURL = usersData[i].twitch_player_url + "&autoplay=false";
            output.push(<tr id={usersData[i].id}>
                <td key={usersData[i].streamer_name} className="streamers-table-data"> {usersData[i].streamer_name} </td>
                <td key={usersData[i].youtube_link} className="streamers-table-data"> <a href={usersData[i].youtube_link} target="_blank">{usersData[i].streamer_name} YouTube</a> </td>
                <td key={usersData[i].twitch_link} className="streamers-table-data"> <a href={usersData[i].twitch_link} target="_blank">{usersData[i].streamer_name} TwitchTV </a> </td>
                <td key={usersData[i].about_streamer} className="streamers-table-data"> {usersData[i].about_streamer} </td>
                <td key={usersData[i].id} className={expandClass}> <input type="button" name={usersData[i].streamer_name} value="+" onClick={this.expandRow}/> </td>
            </tr>);
            output.push(<tr><td colSpan={5} style={{align: "center"}}><iframe id={streamerName} className={hiddenElementClass} src={twitchPlayerURL} height="400" width="480" allowFullScreen={true}> </iframe></td></tr>);
        }
        this.scrollToMyRef();
        return output;
    }

    scrollToMyRef(){
        window.scrollTo(0, this.myRef.offsetTop);
    }

    expandRow(e){
        var streamer_name = e.currentTarget.name;
        var className = ".hideable-element-" + streamer_name;
        if(jQuery(className).hasClass("expandable-element")){
            jQuery(className).removeClass("expandable-element");
            jQuery(className).addClass("hidden-element");
        }
        else{
            jQuery(className).removeClass("hidden-element");
            jQuery(className).addClass("expandable-element");
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

                <div ref={ (ref) => this.myRef=ref } className="streamers-table-div"><table className="streamers-table"><tbody><tr>
                                <th className="streamers-table-header table-header">Streamer nickname</th>
                                <th className="streamers-table-header table-header">Streamer YouTube link</th>
                                <th className="streamers-table-header table-header">Streamer TwitchTV link</th>
                                <th className="streamers-table-header table-header">About</th>
                                <th className="streamers-table-header table-header">More</th>
                            </tr>
                            { this.state.showGameStreamers ? this.generateStreamersTable() :<tr>
                                                                                                <td className="streamers-table-data">Select</td>
                                                                                                <td className="streamers-table-data">game</td>
                                                                                                <td className="streamers-table-data">to</td>
                                                                                                <td className="streamers-table-data">see</td>
                                                                                                <td className="streamers-table-data">content</td>
                                                                                            </tr>
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    };


}
