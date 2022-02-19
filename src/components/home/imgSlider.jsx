import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imgSlider.scss';

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        sildesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <div id="img-slider">
            <Slider {...settings}>
                <div>
                    <img src="/images/slider-badging.jpg" alt="" />
                </div>
                <div>
                    <img src="/images/slider-badag.jpg" alt="" />
                </div>
                <div>
                    <img src="/images/slider-scale.jpg" alt="" />
                </div>
                <div>
                    <img src="/images/slider-scales.jpg" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default ImgSlider;