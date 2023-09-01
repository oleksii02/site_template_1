import React from 'react';
import './Download.css'
import GooglePlay from "../UI/GooglePlay/GooglePlay";

function Download(props) {
    return (<div className={'Download'}>
        <div>
            <h4>Download our app</h4>
            <h5>Practice solving your puzzle as fast as possible with random shuffling and a timer with full
                statistics</h5>
        </div>
        <div className={'GooglePlay'}>
            <GooglePlay app_offer_link={'https://www.google.com/'}/>
                </div>
    </div>);
}

export default Download;
