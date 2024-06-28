"use client";
import Link from "next/link";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function FirstBlock() {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, 
    };

    return (
        <div className="overflow-hidden rounded-b-3xl mt-14">
            <Slider {...settings} className="rounded-b-3xl">
                <div className="w-full">
                    <img 
                        src="/assets/slider1.webp" 
                        alt="Image 1" 
                        className="w-full object-cover rounded-b-3xl"
                    />
                </div>
                <div className=" w-full">
                    <img 
                        src="/assets/slider2.webp" 
                        alt="Image 2" 
                        className="w-full object-cover rounded-b-3xl"
                    />
                </div>
                <div className=" w-full">
                    <img 
                        src="/assets/slider3.webp" 
                        alt="Image 3" 
                        className="w-full object-cover rounded-b-3xl"
                    />
                </div>
                <div className=" w-full">
                    <img 
                        src="/assets/slider4.webp" 
                        alt="Image 4" 
                        className="w-full object-cover rounded-b-3xl"
                    />
                </div>
                <div className=" w-full">
                    <img 
                        src="/assets/slider5.webp" 
                        alt="Image 5" 
                        className="w-full object-cover rounded-b-3xl"
                    />
                </div>
            </Slider>
     
        </div>
    );
}