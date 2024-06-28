"use client"

import Link from "next/link"

import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6  bg-contain bg-no-repeat bg-center mx-10" style={{ backgroundImage: "url('/assets/tiendas.webp')", height: '500px' }}>
        <div className="flex items-center h-full ">
            <div className="max-w-2xl p-8 bg-white bg-opacity-75 ">
                <h1 className="text-4xl font-bold  mb-4">Nuestras Tiendas</h1>
                <p className="mt-4 text-md  my-6">Conoce el Centro de atención, horarios y direccion al que deseas dirigirte según el departamento donde te encuentras.</p>
                <button className="bg-white text-red-600 border border-red-600 py-2 px-6 my-6 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white">
                    Ver tiendas
                </button>
            </div>
        </div>
    </div>
    )
}
