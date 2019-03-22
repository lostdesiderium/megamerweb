import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class LandingPageContent extends Component{
    

    render(){
        return(
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image"></div>
                
                <Row className="landing-page-row">
                    <Col className="landing-page-col"> 
                        <div className="content-title">Find your favorite player</div> 
                        <div className="content-inside">Learn from the best players around the world and keep up to their content</div> 
                        <div className="content-link"><a href="https://google.com">&#10093;</a></div> 
                    </Col>
                    <Col className="landing-page-col"> 
                        <div className="content-title">Organize events</div> 
                        <div className="content-inside">Look for same-minded fellas with help of our system and organize events together, make your gaming easier with same skilled players</div> 
                        <div className="content-link"><a href="#">&#10093;</a></div>                         
                    </Col>
                </Row>
                <Row className="landing-page-row">
                    <Col className="landing-page-col"> 
                        <div className="content-title">Read essential news easier</div> 
                        <div className="content-inside">We bring you relevant information about game changes/patches, no boring news, plain, simple and everything at one place</div> 
                        <div className="content-link"><a href="#">&#10093;</a></div> 
                    </Col>    
                    <Col className="landing-page-col"> 
                        <div className="content-title">Find game's buddy(s) easier</div> 
                        <div className="content-inside">Look with ease how to find a gaming friend. You need only fill up your game profile and we will find you possible matches </div> 
                        <div className="content-link"><a href="#">&#10093;</a></div> 
                    </Col>
                </Row>
            </div>
        );
    }
}