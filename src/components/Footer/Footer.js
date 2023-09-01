import React from 'react';
import './Footer.css'
import Facebook from '../svg/Facebook.png'
import Instagram from '../svg/Instagram.png'
import Twitter from '../svg/Twitter.png'

function Footer(props) {
    const Year = new Date().getFullYear()

    return (
        <footer id ='contacts'>
            <div className={'SocialMedia'}>
                <img className={'Facebook'} src={Facebook} alt={''}/>
                <img className={'Instagram'} src={Instagram} alt={''}/>
                <img className={'Twitter'} src={Twitter} alt={''}/>

                <div><p id={'year'}>©{Year} Name | ALL RIGHTS RESERVED</p>
                    <span>
                        <p>Private Policy</p>
                        <p>Term of Use</p>
                    </span>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
