import React from 'react';
import './GooglePay.css'

const GooglePlay = ({app_offer_link}) => (
    < >
        <button onClick={() => {
            window.open('https://google.com', '_blank')
        }}
                id={'GooglePay'}
        >
        </button>
    </>

);

export default GooglePlay;
