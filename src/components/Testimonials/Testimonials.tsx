import Image from "next/image";
import Script from "next/script";
import { useEffect } from 'react';

export function Testimonials() {
    // Aquí podrías definir los valores UTM de manera dinámica o estática, dependiendo de tu aplicación
    const utm_source = 'source';
    const utm_medium = 'medium';
    const utm_campaign = 'campaign';
    const utm_term = 'term';
    const utm_content = 'content';

    // Construir la URL inicial del iframe incluyendo los UTMs
    const iframeUrl = `https://apiswolgroup.com/claro/formulario?utm_source=${encodeURIComponent(utm_source)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_term=${encodeURIComponent(utm_term)}&utm_content=${encodeURIComponent(utm_content)}`;

    return (
        <div className="relative w-full h-screen" id="testimonios">
            <div className="absolute inset-0">
                <Image
                    src="/assets/form-img.webp"  // Asegúrate de que esta ruta sea correcta
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
            </div>
            <div className="relative flex justify-end items-center w-full h-full p-8">
                <div className="w-1/3 bg-white rounded-lg shadow-lg p-4">
                    <iframe 
                        src={iframeUrl}
                        frameBorder="0" 
                        className="w-full h-[70vh]"
                    ></iframe>
                </div>
            </div>
            <Script
                src="https://apiswolgroup.com/js/index.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
