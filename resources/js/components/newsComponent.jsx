import React, { Component } from 'react';
import {Nav} from 'react-router-dom';

import PubgLogo from '../../assets/logos/pubg_logo.png';
import CsgoLogo from '../../assets/logos/csgo_logo.png';
import SmiteLogo from '../../assets/logos/smite_logo.png';
import ApexLogo from '../../assets/logos/apex_logo.png';
import HearthstoneLogo from '../../assets/logos/hearthstone_logo_2.png';

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
                <div className="background-color"></div>
                <div className="background-image-news"></div>

                <div className="games-choice-top-bar">
                    <ul>
                        <li><img src={PubgLogo} alt="pubg_logo"/></li>
                        <li><img src={CsgoLogo} alt="pubg_logo"/></li>
                        <li><img src={SmiteLogo} alt="pubg_logo"/></li>
                        <li><img src={ApexLogo} alt="pubg_logo"/></li>
                        <li><img src={HearthstoneLogo} alt="pubg_logo"/></li>
                    </ul>
                </div>
                <div className="news-choice-side-bar">
                    <ul className="news-ul">
                        <li><a href="#"> Patches </a></li>
                        <li><a href="#"> Events </a></li>
                    </ul>
                </div>
            </div>
        );
    };


}
