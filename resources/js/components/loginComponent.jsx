import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import SVGIcon from '../../assets/icons/SVGIcons.js';

export default class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type: "password"
        };
        this.changeVisibility = this.changeVisibility.bind(this);
      }

    changeVisibility(){
        this.setState(() => {
            console.log(this.state.type);
            if(this.state.type == "password"){
                this.state.type = "text";
                return "text";
            }
            if(this.state.type == "text"){
                this.state.type = "password";
                return "password";
            }
        });
        
    }


    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-login"></div>

                <Row className="login-row">
                    <Col className="login-col">
                        <div className="login-div">
                            
                            <input className="email-field" name="email" type="text" placeholder="Email"/>
                            <span className="password-span-row"><input className="password-field" name="password" type={ this.state.type} placeholder="Password" /><span onClick={ this.changeVisibility}><SVGIcon className="ic-eye" name="ic-eye" fill="#00DC8A" width="24" /></span></span>
                            <Button className="submit-button" name="submit-button" type="submit">login</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

    
    
}