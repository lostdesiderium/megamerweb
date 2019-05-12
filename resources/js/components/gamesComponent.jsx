import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import PubgBackground from '../../assets/backgrounds/pubg_background_1920x1080.jpg';
import SmiteBackground from '../../assets/backgrounds/smite_background_1920x1080.jpg';
import ApexBackground from '../../assets/backgrounds/apex_background_1920x1080.jpg';
import HearthstoneBackground from '../../assets/backgrounds/hearthstone_background_1920x1080.jpg';
import CsgoBackground from '../../assets/backgrounds/csgo_background_1920x1080.jpg';

export default class GamesPage extends Component{


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
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="About content"/>
                                </div>

                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={CsgoBackground} alt="csgo_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Counter-Strike Global Offensive </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="About content"/>
                                </div>
                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={HearthstoneBackground} alt="hearthstone_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Hearthstone </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="About content"/>
                                </div>
                            </div>
                        </Col>

                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={ApexBackground} alt="apex_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Apex Legends </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="About content"/>
                                </div>
                            </div>
                        </Col>
                        <Col className="game-cards-col">
                            <div className="game-card">
                                <img className="game-card-background" src={SmiteBackground} alt="smite_background"/>
                                <div className="game-card-popup">
                                    <div className="game-card-title content-title"> Smite </div>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-find-mate" value="Find a playmate"/>
                                    <input className="game-card-btn" type="submit" name="game-card-btn-read-more" value="About content"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    };


}
