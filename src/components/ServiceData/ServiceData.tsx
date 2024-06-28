"use client"
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import {  RiArrowRightSLine  } from 'react-icons/ri'; // Importa el icono de búsqueda

export function ServiceData() {
    return (
        <MotionTransition className="">
            <div className="flex justify-center">
                <div className="flex items-center mt-10">
                <h1 className="text-3xl font-bold mb-10">¿En que podemos apoyarte hoy?</h1>
              
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center space-x-16">

                   {/* ELEMENTO FLEX  */}
            <div className="w-64 px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
                    {/* Icono en la esquina superior izquierda */}
                    <div className="w-1/4 flex items-start justify-start py-4">
                    <Image src="/assets/factura.png" width="80" height="60" alt="Logo Bank" />
                      
                    </div>
                    {/* Contenido de texto */}
                    <div className="w-3/4 flex flex-col justify-between">
                        <div className="bg-white px-4 py-2 flex items-center">
                            <p className="text-sm font-semibold text-gray-500 tracking-wide">Pagá tu Factura</p>
                        </div>
                        <div className="bg-white px-4 flex items-center">
                            <p className="text-xs text-gray-700 tracking-wide leading-relaxed">De forma rapida y sencilla de tus servicios Claro.</p>
                        </div>
                        <div className="bg-white px-4 py-2 flex items-center text-cyan-500">
                            <p className="text-xs font-semibold mr-2 tracking-wide">Pagá aqui</p>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                </div>
            </div>

                  
                   {/* ELEMENTO FLEX  */}
            <div className="w-64 px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
                    {/* Icono en la esquina superior izquierda */}
                    <div className="w-1/4 flex items-start justify-start py-4">
                    <Image src="/assets/chat.png" width="80" height="60" alt="Logo Bank" />
                      
                    </div>
                    {/* Contenido de texto */}
                    <div className="w-3/4 flex flex-col justify-between">
                        <div className="bg-white px-4 py-2 flex items-center">
                            <p className="text-sm font-semibold text-gray-500">Recargá y activá Superpacks</p>
                        </div>
                        <div className="bg-white px-4 flex items-center">
                            <p className="text-xs text-gray-700 tracking-normal leading-relaxed">¡No te quedés sin saldo!.</p>
                        </div>
                        <div className="bg-white px-4 py-2 flex items-center text-cyan-500">
                            <p className="text-xs font-semibold mr-2 tracking-wide">Comprá aqui</p>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                </div>
            </div>

                               {/* ELEMENTO FLEX  */}
            <div className="w-64 px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
                    {/* Icono en la esquina superior izquierda */}
                    <div className="w-1/4 flex items-start justify-start py-4">
                    <Image src="/assets/tarjeta.png" width="80" height="60" alt="Logo Bank" />
                      
                    </div>
                    {/* Contenido de texto */}
                    <div className="w-3/4 flex flex-col justify-between">
                        <div className="bg-white px-4 py-2 flex items-center">
                            <p className="text-sm font-semibold text-gray-500">Recargas internacionales</p>
                        </div>
                        <div className="bg-white px-4 flex items-center">
                            <p className="text-xs text-gray-700 tracking-normal leading-relaxed">Pagá con tarjetas emitidas en 22 paies.</p>
                        </div>
                        <div className="bg-white px-4 py-2 flex items-center text-cyan-500">
                            <p className="text-xs font-semibold mr-2 tracking-wide">Pagá aqui</p>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                </div>
            </div>

               
                   {/* ELEMENTO FLEX  */}
            <div className="w-64 px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
                    {/* Icono en la esquina superior izquierda */}
                    <div className="w-1/4 flex items-start justify-start py-4">
                    <Image src="/assets/tele.png" width="80" height="60" alt="Logo Bank" />
                      
                    </div>
                    {/* Contenido de texto */}
                    <div className="w-3/4 flex flex-col justify-between">
                        <div className="bg-white px-1 py-1 flex items-center">
                            <p className="text-sm font-semibold text-gray-500 tracking-wide">Contratación de servicios nuevos</p>
                        </div>
                        <div className="bg-white px-1 flex items-center">
                            <p className="text-xs text-gray-700 tracking-wide leading-relaxed">Renová y contratá tu servicio Móvil o Claro Hogar sin salir de casa.</p>
                        </div>
                        <div className="bg-white px-1 flex items-center text-cyan-500">
                            <p className="text-xs font-semibold mr-2 tracking-wide">Solicitaló aqui</p>
                            <RiArrowRightSLine />
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
        </MotionTransition>
    )
}
