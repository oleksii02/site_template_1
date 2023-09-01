import React, {useEffect} from 'react';
import 'swiper/css';
import 'swiper/less/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'


import {Autoplay, Mousewheel, Swiper} from "swiper";
import {Pagination} from "swiper";


function Carousel() {

    useEffect(() => {
         new Swiper(".swiper", {
            //  autoplay: {
            //      delay: 2500,
            //      disableOnInteraction: false,
            //   },
            modules: [Pagination, Autoplay, Mousewheel],
            mousewheel: true,
            centeredSlides: true,
            effect: "coverflow",
            grabCursor: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: true
            },
            spaceBetween: 38,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                observeParents: true,
                //dynamicBullets: true,
            }

        });
    }, []);

    return (
        <div className={'Carousel'}>
            <section>
                <div

                    className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide--one">

                        </div>

                        <div className="swiper-slide swiper-slide--two">

                        </div>

                        <div className="swiper-slide swiper-slide--three">

                        </div>

                        <div className="swiper-slide swiper-slide--four">

                        </div>

                        <div className="swiper-slide swiper-slide--five">

                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </div>
    );
}

export default Carousel;
