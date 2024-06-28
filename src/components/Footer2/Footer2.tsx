import { Reveal } from "../Reveal";
import Link from "next/link";
import { footer2Element } from "./Footer2.data";

export function Footer2() {
    return (
        <div className="mx-auto bg-neutral-700">
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-sm text-gray-200 text-center md:text-left mb-4 md:mb-0">
                        <Reveal>
                            Todos los derechos reservados, Claro 2021
                        </Reveal>
                    </div>

                    <div className="flex justify-center md:justify-start text-gray-200 items-center">
                    {footer2Element.map(({ id, name, link }) => (
                    <Link key={id} href={link} className="block mt-4 text-primaryDark hover:text-white mx-2 text-sm">
                        {name}     |
                    </Link>
                ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
