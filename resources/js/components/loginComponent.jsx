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
            errorMsg: '',
            errorTriggered: false,
            type: "password"
        };

        this.changeVisibility = this.changeVisibility.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.validateForm = this.validateForm.bind(this);
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

            this.setState( {
                errorMsg: "",
                errorTriggered: false,
            });

            jQuery(".login-button")
                .attr("disabled", "disabled")
                .html(
                    '<i class="fas fa-spinner fa-pulse fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
                );

            let uri = "http://megamer.build/api/user/login";

            var loginFormData = new FormData();
            loginFormData.append('emailOrUsername', this.state.emailOrUsername);
            loginFormData.append('password', this.state.password);

            var validationResponse = this.validateForm(this.state.emailOrUsername.trim(), this.state.password.trim() );

            if(validationResponse === true){
                Axios.post(uri, loginFormData).then( (response) => {
                    return response;
                })
                .then(json => {
                    if(json.data.success ){
                        let userData = {
                            email: json.data.data.email,
                            id: json.data.data.id,
                            username: json.data.data.username,
                            auth_token: json.data.data.auth_token,
                            timestamp: new Date().toString()
                          };

                          let appState = {
                            isLoggedIn: true,
                            user: userData
                          };

                          // save app state with user date in local storage
                          localStorage["appState"] = JSON.stringify(appState);
                          this.props.login();
                          this.props.history.push('/');
                    }
                    else{
                        this.setState( {
                            errorMsg: "Invalid password or username",
                            errorTriggered: true,
                        });

                        jQuery(".login-button")
                        .removeAttr("disabled")
                        .html("Login");
                    }
                }
                )
                .catch(error => {
                    alert(`An Error Occured! ${error}`);
                    jQuery(".login-button")
                    .removeAttr("disabled")
                    .html("Login");
                });
            }
            else{
                jQuery(".login-button")
                .removeAttr("disabled")
                .html("Login");
            }

        }

        validateForm(username, password){
            var errorMessage = "";

            if(username.length >= 6){

            }
            else{
                errorMessage += "Username is too short \n";
            }

            if(password.length >= 8){

            }
            else{
                errorMessage += "Password is too short \n";
            }

            this.state.errorMsg = errorMessage;

            if(errorMessage.length > 0){
                this.setState( {
                    errorTriggered: true,
                    errorMsg: errorMessage,
                });
                return false;
            }
            else{
                this.setState( {
                    errorTriggered: false,
                    errorMsg: "",
                });
            }

            return true;
        }


    render(){
        const ErrorBox = () => (
            <div id="error-box" className="error-box">
                <span className="error-msg"> {this.state.errorMsg} </span>
            </div>
        )

        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-login"></div>

                <Row className="login-row">
                    <Col className="login-col">
                        <div className="login-div">

                            { this.state.errorTriggered && <ErrorBox /> }

                            <div className="email-username-div input-div">
                                <label className="label" htmlFor="email-or-username-field">Email/username</label>
                                <input className="email-or-username-field" name="email-or-username" type="text" onChange={this.setEmail} placeholder="Email or username"/>
                            </div>

                            <div className="password-div input-div">
                                <label className="label password-label" htmlFor="password-field">Password</label>
                                <span className="password-span-row"><input className="password-field" name="password" type={ this.state.type} onChange={this.setPassword} placeholder="Password" /><span onClick={ this.changeVisibility}><SVGIcon className="ic-eye" name="ic-eye" fill="#00DC8A" width="24" /></span></span>
                            </div>

                            <Button className="submit-button login-button" name="submit-button" type="submit" onClick={this.handleLogin}>login</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };



}
