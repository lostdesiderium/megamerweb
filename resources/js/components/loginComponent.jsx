import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import SVGIcon from '../../assets/icons/SVGIcons.js';
import Axios from 'axios';

export default class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            emailOrUsername: '',
            password: '',
            type: "password"
        };

        this.changeVisibility = this.changeVisibility.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

        setEmail(e){
           this.setState({
                emailOrUsername: e.currentTarget.value,
           })
        }

        setPassword(e){
            this.setState({
                password: e.target.value,
            });
        }

        changeVisibility(){
            this.setState( () => {
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

        handleLogin(e){
            e.preventDefault();
            let uri = "http://megamer.build/api/user/login";

            var loginFormData = new FormData();
            loginFormData.append('emailOrUsername', this.state.emailOrUsername);
            loginFormData.append('password', this.state.password);

            Axios.post(uri, loginFormData).then( (response) => {
                console.log(response);
                return response;
            })
            .then(json => {
                if(json.data.success ){
                    alert("Yey");
                }
            }
            );
        }


    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-login"></div>

                <Row className="login-row">
                    <Col className="login-col">
                        <div className="login-div">

                            <div className="error-box">
                                <span className="error-msg">Error box</span>
                            </div>

                            <div className="email-username-div input-div">
                                <label className="label" htmlFor="email-or-username-field">Email/username</label>
                                <input className="email-or-username-field" name="email-or-username" type="text" onChange={this.setEmail} placeholder="Email or username"/>
                            </div>

                            <div className="password-div input-div">
                                <label className="label password-label" htmlFor="password-field">Password</label>
                                <span className="password-span-row"><input className="password-field" name="password" type={ this.state.type} onChange={this.setPassword} placeholder="Password" /><span onClick={ this.changeVisibility}><SVGIcon className="ic-eye" name="ic-eye" fill="#00DC8A" width="24" /></span></span>
                            </div>

                            <Button className="submit-button" name="submit-button" type="submit" onClick={this.handleLogin}>login</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };



}
