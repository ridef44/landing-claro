"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

import { RiFileTextLine, RiArrowRightSLine, RiArrowRightLine  } from 'react-icons/ri'; 

export function ControlBilling() {
    return (
        <div className="p-4 py-10">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                 <h1 className="text-left text-3xl font-semibold my-4">
                 Claro Trasparente...
                 </h1>
                  
            </div>


            <div className="flex flex-wrap items-center justify-center space-x-16">

                   {/* ELEMENTO FLEX  */}
            <div className=" px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
               
                    {/* Contenido de texto */}
                    <div className="flex flex-col justify-between">
                         <div className="bg-white px-4 py-2 flex items-center">
                            <Image src="/assets/medalla.png" width="60" height="40" alt="Logo Bank" />
                         
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center">
                          
                            <p className="text-2xl font-semibold tracking-wide">Información</p>
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Llamadas ilimitadas a otros operadores (Claro Hogar) </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Terminos y Condiciones Claro Club </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Política de llamadas a USA </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Terminos y Condiciones de uso del sitio Tienda Claro </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                     
                    </div>
                </div>
            </div>


                   {/* ELEMENTO FLEX  */}
                   <div className=" px-4 shadow-xl hover:scale-110 duration-300 rounded-xl">
                <div className="h-auto bg-white rounded-xl p-4 flex">
               
                    {/* Contenido de texto */}
                    <div className="flex flex-col justify-between">
                         <div className="bg-white px-4 py-2 flex items-center">
                            <Image src="/assets/medalla.png" width="60" height="40" alt="Logo Bank" />
                         
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center">
                          
                            <p className="text-2xl font-semibold tracking-wide">Políticas, Terminos y Condiciones</p>
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Política de Uso Justo Internet Ilimitado Prepago </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Política de Uso Razonable Lllamadas Ilimitadas Prepago </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Política de Uso razonable </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                        <div className="bg-white px-4 py-4 flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-wide">Terminos y Condiciones de uso del sitio Tienda Claro </p>
                            <RiArrowRightLine className="ml-8 text-cyan-600 text-2xl" />
                        </div>

                     
                    </div>
                </div>
            </div>


                  
         


            
        </div>
           
        </div>
    )
}
