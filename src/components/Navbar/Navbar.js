import React from 'react';
import './Navbar.css'
import GooglePlay from "../UI/GooglePlay/GooglePlay";
import Carousel from "../UI/Carousel/Carousel";
import DrawerAppBar from "../UI/DrawerAppBar/DrawerAppBar";
function Navbar() {


    return (
        <div className={'Navbar'} id={'main'}>
            <img className={'background-image'} alt={''}/>
            <DrawerAppBar/>
            <div className={'NameProduct'}>
                <h1>The Name Of The Product</h1>
                <h3>Practice solving your puzzle as fast as possible with random shuffling and a timer with full statistics</h3>
                <span>
                <GooglePlay app_offer_link={'https://www.google.com/'}/>
                    </span>

            </div>
            <Carousel/>
        </div>
    );
}

export default Navbar;
