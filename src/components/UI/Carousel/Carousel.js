import React, {useEffect} from 'react';
import 'swiper/css';
import 'swiper/less/pagination';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'


import {Autoplay, Mousewheel, Navigation, Swiper, HashNavigation} from "swiper";
import {Pagination} from "swiper";




function Carousel() {



    useEffect(() => {

         new Swiper(".swiper", {
            //  autoplay: {
            //      delay: 2500,
            //      disableOnInteraction: false,
            //   },
            modules: [Pagination, Autoplay, Mousewheel, Navigation,HashNavigation],
             hashNavigation: {
                 watchState: true,
             },
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
                        <div className="swiper-slide swiper-slide--one "
                        data-hash="slide1">

                        </div>

                        <div className="swiper-slide swiper-slide--two"
                        data-hash="slide2">

                        </div>

                        <div className="swiper-slide swiper-slide--three"
                        data-hash="slide3">

                        </div>

                        <div className="swiper-slide swiper-slide--four"
                        data-hash="slide4">

                        </div>

                        <div className="swiper-slide swiper-slide--five"
                        data-hash="slide5">

                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </div>
    );
}

export default Carousel;
