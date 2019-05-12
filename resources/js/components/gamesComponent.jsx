import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default class GamesPage extends Component{

    getH1Style(){
        var h1Style = {
            color: 'white',
        }

        return h1Style;
    }

    render(){
        return (
            <div className="page-container">
                <div className="games-cards-container">
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    };


}
