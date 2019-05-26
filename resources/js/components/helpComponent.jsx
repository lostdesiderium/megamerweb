import React, { Component } from 'react';
import Component404 from './404component';

export default class HelpPage extends Component{

    getH1Style(){
        var h1Style = {
            color: 'white',
        }

        return h1Style;
    }

    render(){
        return (
            <div className="page-container">
                <div className="background-color"></div>
                <div className="background-image-signup"></div>

                <Component404 />
            </div>
        );
    };


}
