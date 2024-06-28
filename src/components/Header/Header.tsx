"use client"; // Indica que este componente debe ser renderizado en el cliente

import Image from "next/image";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { RiMenu3Line, RiSearchLine, RiArrowDropDownFill,RiUser3Line } from 'react-icons/ri'; // Importa el icono de búsqueda

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
    
            <nav className="bg-red-600 py-2 text-white fixed top-0 left-0 w-full shadow-md z-50">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Contenedor para los elementos del lado izquierdo */}
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center ml-2 p-1">
                            <Image src="/assets/logo-claro-blanco.svg" width="80" height="60" alt="Logo Bank" />
                        </Link>
                        {/* Ícono del menú móvil */}
                        <RiMenu3Line className="block text-3xl md:hidden cursor-pointer ml-4" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                        {/* Enlaces de navegación */}
                        <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto ml-4`}>
                            <div className="flex flex-col md:p-0 md:flex-row md:space-x-2 md:mt-0 md:border-0">
                                {dataHeader.map(({ id, name, idLink }) => (
                                    <div key={id} className="flex flex px-4 transition-all duration-500 ease-in-out">
                                        <Link href={idLink} className="flex items-center text-md font-sans font-semibold hover:text-gray-300">{name}
                                        <RiArrowDropDownFill className="text-3xl font-bold" />
                                        </Link>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                                    {/* Contenedor para el ícono de búsqueda y el botón "Mi Claro" en el extremo derecho */}
                    <div className="flex items-center space-x-4">
                        <RiSearchLine className="text-2xl text-white cursor-pointer hover:bg-white hover:text-gray-900" />

                        <div className="inline-flex items-center justify-center text-sm font-semibold text-white bg-red-700 rounded-full px-5 py-3 hover:bg-white hover:text-gray-900">
                            <RiUser3Line className="text-xl mr-2" /> Mi Claro
                        </div>
                    </div>



                </div>
            </nav>
      
    );
}
