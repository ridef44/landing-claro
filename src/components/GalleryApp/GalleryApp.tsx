import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick-custom.css';  // Importa tu archivo CSS personalizado
import { dataGallery } from './GalleryApp.data';

export function GalleryApp() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Mostrar tres elementos a la vez
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <div className="flex flex-col md:flex-row rounded-b-3xl ">
            <div className="w-full md:w-1/3 md:p-12 flex flex-col justify-center ">
                <h3 className="text-xl md:text-2xl text-gray-700 mb-2 ">En tu plan de 50 GB</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 ">{dataGallery[currentIndex].title}</h2>
                <h3 className="text-md md:text-md text-gray-700 mb-2 ">Capacidad 256 GB</h3>
                <p className="text-md md:text-md mb-4 ">{dataGallery[currentIndex].description}</p>
                <p className="text-2xl md:text-3xl font-semibold mb-6 text-right ">{dataGallery[currentIndex].price}</p>
                <p className="text-xl font-semibold text-green-800 mb-6 text-right">Plan a 24 meses</p>
                <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold">
                    Adquirilo aquí
                </button>
            </div>
            <div className="w-full md:w-2/3 h-full flex justify-center items-center ">
                <Slider {...settings} className="w-full ">
                    {dataGallery.map((item, index) => (
                        <div key={index} className={`flex justify-center items-center h-full p-4 `}>
                            <img 
                                src={item.src} 
                                alt={item.alt} 
                                className="object-contain h-full mx-auto rounded-2xl shadow-lg p-4 px-6"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
