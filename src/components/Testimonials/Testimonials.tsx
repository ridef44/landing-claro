"use client"

import Image from "next/image";

export function Testimonials() {
    return (
        <div className="relative p-8" id="testimonios">
       <Image
                    src="/assets/banner.webp"  // Asegúrate de que esta ruta sea correcta
                    alt="Banner"
                    width={1920}  // Ajusta el ancho según el tamaño real de la imagen
                    height={500}  // Ajusta la altura según el tamaño real de la imagen
                    layout="responsive"
                    quality={100}
                />
        </div>
    )
}
