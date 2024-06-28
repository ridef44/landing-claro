"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'

import { GalleryApp } from '../GalleryApp';
import Image from "next/image";

export function ShopMarket() {
    return (
        <div className="relative px-6 py-20" id="tarjetas">

            <div className="flex justify-center">
                <div className="flex items-center ">
                <h1 className="text-3xl font-bold mb-10">Conocé nuestro catálogo</h1>
            </div>
            </div>

            <div className="flex justify-center items-center mt-4 mb-12">
            <div className="cursor-pointer py-4 px-8 text-center text-md font-semibold border-b-8 border-gray-300 hover:border-red-600">
                Equipos postpago
            </div>
            <div className="cursor-pointer py-4 px-8 text-center text-md border-b-8 font-semibold border-gray-300 hover:border-red-600">
                Celulares Prepago
            </div>
            <div className="cursor-pointer py-4 px-8 text-center text-md border-b-8 font-semibold border-gray-300 hover:border-red-600">
                Renovaciones
            </div>
        </div>
            <GalleryApp />
           
      
        </div>
    )
}
