import React, { Component } from 'react';

export default class NewsPage extends Component{

    getH1Style(){
        var h1Style = {
            color: 'white',
        }

        return h1Style;
    }

    render(){
        return (
            <div className="page-container">
                <h1 style={{color: 'black'}}>News page </h1>
            </div>
        );
    };

    
}