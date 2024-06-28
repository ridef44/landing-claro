"use client"
import 'swiper/css'
import Image from 'next/image'
import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowRightLine } from "react-icons/ri";

export function PaymentsMethods() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
       
        <div className=" justify-center bg-gray-100">

                <div className="flex justify-center">
                    <div className="flex items-center mt-10">
                        <h1 className="text-3xl font-bold mb-10">¿Tienes algunda duda?</h1>
                    </div>
                </div>

        <div className="flex flex-wrap justify-center p-4 space-x-4">

            <div className="w-full md:w-1/6 p-4 flex flex-col justify-center items-center text-center border border-gray-200 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-2xl font-semibold my-2">Servicio al cliente</h2>
                <div className="my-8">
                    <Image src="/assets/telefono.png" width={50} height={30} alt="Logo Bank" />
                </div>
                <p className="text-md md:text-md mb-8">Llámanos cuando necesites.</p>
                <button className="bg-white text-red-600 border border-red-600 py-2 px-6 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white">
                    Contáctanos
                </button>
            </div>


            <div className="w-full md:w-1/6 p-4 flex flex-col justify-center items-center text-center border border-gray-200 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-2xl font-semibold my-2">Nuestras tiendas</h2>
                <div className="my-8">
                    <Image src="/assets/tienda.png" width={50} height={30} alt="Logo Bank" />
                </div>
                <p className="text-md md:text-md mb-8">Conocé nuestros horarios y direcciones..</p>
                <button className="bg-white text-red-600 border border-red-600 py-2 px-6 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white">
                    Conocé mas
                </button>
            </div>

            <div className="w-full md:w-1/6 p-4 flex flex-col justify-center items-center text-center border border-gray-200 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-2xl font-semibold my-2">Servicio al cliente</h2>
                <div className="my-8">
                    <Image src="/assets/whatsapp.png" width={50} height={30} alt="Logo Bank" />
                </div>
                <p className="text-md md:text-md mb-8">Resolvemos todas tus dudas.</p>
                <button className="bg-white text-red-600 border border-red-600 py-2 px-6 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white">
                    Inicia conversación
                </button>
            </div>
           


            <div className="w-full md:w-1/3 p-4 flex flex-col justify-center overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>

            <div className="mt-4 ≈ ">

             {/* Menu pregutnas frecuentes*/}
            <div className='p-2 px-4'>
                    <h3
                        className="text-sm mb-2 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleAnswer(0)}
                    >
                        ¿Cuál es el número para llamar al buzón de voz?
                        {activeIndex === 0 ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" />}
                    </h3>
                    
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            activeIndex === 0 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <p className="text-sm mb-4 border-t border-black align-middle items-center pt-2">
                            Marcá *80 y podrás:<br />
                            Escuchar tus mensajes de Voz.<br />
                            Configurar tu buzón de mensajes.<br />
                            Consultar tu saldo.
                        </p>
                    </div>
                    </div>

                {/* Menu pregutnas frecuentes*/}

                    {/* Menu pregutnas frecuentes*/}
            <div className='bg-white p-2 px-4'>
                    <h3
                        className="text-sm mb-2 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleAnswer(1)}
                    >¿Cómo consulto mi número móvil?
                        {activeIndex === 1 ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" />}
                    </h3>
                    
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out  ${
                            activeIndex === 1 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <p className="text-sm mb-4 border-t border-black pt-2">
                        Para consultar tu número móvil, marca *#123#.
                        </p>
                    </div>
                    </div>

                {/* Menu pregutnas frecuentes*/}


                <div className='p-2 px-4'>
                    <h3
                        className="text-sm mb-2 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleAnswer(2)}
                    >
                        ¿Cómo puedo consultar mi saldo?
                        {activeIndex === 2 ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" />}
                    </h3>
                    
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            activeIndex === 2 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <p className="text-sm mb-4 border-t border-black items-center pt-2">
                        Para consultar tu saldo, marca *123# y sigue las instrucciones.
                        </p>
                    </div>
                    </div>

                {/* Menu pregutnas frecuentes*/}

            </div>
        </div>


        </div>

        <div className="flex justify-center">
            
                    <div className="flex items-center my-10">
                   
               
                    <button className="flex items-center bg-white text-red-600 border border-red-600 py-2 px-16 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white">
                    <RiArrowRightLine className="text-2xl mr-2" />
                   Ir a la sección de ayuda
                </button>

                    </div>
                </div>
    
        </div>
            
       
    )
}
