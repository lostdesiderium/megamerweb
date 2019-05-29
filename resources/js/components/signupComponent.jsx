import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import SVGIcon from '../../assets/icons/SVGIcons.js';
import Axios from 'axios';

export default class SingupPage extends Component{



    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            repeatPassword: '',
            errorMsg: '',
            errorTriggered: false,
            type: 'password',
        }

        this.setEmail = this.setEmail.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setRepeatPassword = this.setRepeatPassword.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
        this._registerUser = this._registerUser.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    setUsername(e){
        this.setState({
             username: e.currentTarget.value,
        })
     }

    setEmail(e){
        this.setState({
             email: e.currentTarget.value,
        })
     }

    setPassword(e){
        this.setState({
            password: e.target.value,
        });
    }

    setRepeatPassword(e){
        this.setState({
            repeatPassword: e.target.value,
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

    validateForm(email, username, password, repeatPassword){
        var errorMsg = "";

        if( email.indexOf('@') > -1 && email.length >= 8){

        }
        else{
            errorMsg += "Check if email contains @, minimum length is 8 \n";
        }

        if(username.length >= 6){

        }
        else{
            errorMsg += "Username is too short \n";
        }

        if(password.length >= 8){

            if( password === repeatPassword ){

                var pwRegExp = /(.*[A-Z].*)(.*[a-z].*)(.*\d.*)(.*[\!\*\.\+#&$%\^\?_-].*)/g;
                if(password.match(pwRegExp) ){

                }
                else{
                    errorMsg += "Make sure password contains at least one Upper case, digit and symbol \n";
                }
            }
            else{
                errorMsg += "Passwords do not match \n";
            }
        }
        else{
            errorMsg += "Password is too short \n";
        }

        if(errorMsg.length > 0){
            this.setState( {
                errorTriggered: true,
            });
            return errorMsg;
        }
        else{
            this.setState( {
                errorTriggered: false,
            });
        }

        return true;
    }



    _registerUser(e){
        e.preventDefault();

        jQuery(".signup-btn")
                .attr("disabled", "disabled")
                .html(
                    '<i class="fas fa-spinner fa-pulse fa-1x fa-fw"></i><span class="sr-only">Loading...</span>'
                );

        let uri = "http://megamer.build/api/user/register";

        var email = this.state.email;
        var username = this.state.username;
        var password = this.state.password;
        var repeatPassword = this.state.repeatPassword;

        var validationResponse = this.validateForm(email, username, password.trim(), repeatPassword.trim());
        //console.log(validationResponse);

        if ( validationResponse === true ) {
            var formData = new FormData();
            formData.append("password", this.state.password);
            formData.append("email", this.state.email);
            formData.append("username", this.state.username);

            Axios.post(uri, formData).then( (response) => {
                console.log(response);
                return response;
            })
            .then(json => {
                if(json.data.success){

                    let user = {
                        email: json.data.data.email,
                        username: json.data.data.username,
                        auth_token: json.data.data.auth_token,
                        timestamp: new Date().toString()
                    }

                    let appState = {
                        isLoggedIn: true,
                        user: user,
                    }

                    localStorage["appState"] = JSON.stringify(appState);
                    this.props.login();
                    this.props.history.push('/');
                    /*this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    })*/
                }
                else{
                    jQuery(".signup-btn")
                    .removeAttr("disabled")
                    .html("Sign up");
                }
            }).catch(error => {
                alert(`An Error Occured! ${error}`);
                jQuery(".signup-btn")
                .removeAttr("disabled")
                .html("Sign up");
            });
        }
        else{
            this.state.errorMsg = validationResponse;
            jQuery(".signup-btn")
            .removeAttr("disabled")
            .html("Sign up");
        }


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
                <div className="background-image-signup"></div>

                <Row className="login-row">
                    <Col className="login-col">
                        <div className="login-div">

                            { this.state.errorTriggered && <ErrorBox /> }

                            <div className="email-div input-div">
                                <label className="email-label label" htmlFor="email-field">Email address</label><span className="required-symbol">  *</span>
                                <input className="email-field" name="email-or-username" type="text" onChange={this.setEmail} placeholder="Email, min length 8"/>
                            </div>
                            <div className="username-div input-div">
                                <label className="username-label label" htmlFor="username-field">Username</label><span className="required-symbol">  *</span>
                                <input className="username-field" name="email-or-username" type="text" onChange={this.setUsername} placeholder="Username, min length 6"/>
                            </div>
                            <div className="password-div input-div">
                                <label className="password-label label" htmlFor="password-field">Password</label><span className="required-symbol">  *</span><br/>
                                <span className="password-span-row"><input className="password-field-signup" name="password" type={ this.state.type} onChange={this.setPassword} placeholder="Password, min length 8" /><span onClick={ this.changeVisibility}><SVGIcon className="ic-eye-signup" name="ic-eye" fill="#00DC8A" width="24" /></span></span>
                            </div>
                            <div className="repeat-password-div input-div">
                                <label className="repeat-password-label label" htmlFor="repeat-password-field">Confirm password</label><span className="required-symbol">  *</span><br/>
                                <span className="repeat-password-span-row"><input className="repeat-password-field" name="repeatPassword" type={ this.state.type} onChange={this.setRepeatPassword} placeholder="Repeat password" /><span onClick={ this.changeVisibility}></span></span>
                            </div>


                            <Button className="submit-button signup-btn" name="submit-button" type="submit" onClick={this._registerUser}>sign up</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };


}


