import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks, footerElement } from "./Footer.data";
import Link from "next/link";

export function Footer() {
    return (
        <div className="mx-auto bg-neutral-800">
            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {footerData.map(({ id, title, links }) => (
                        <div key={id}>
                            <h4 className="text-lg text-white font-semibold mb-4">
                                <Reveal>{title}</Reveal>
                            </h4>
                            {links.map(({ id, name, link }) => (
                                <Link key={id} href={link} className="block text-sm text-primaryDark hover:text-white my-6">
                                    <Reveal>
                                        {name}
                                    </Reveal>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex justify-start gap-5 mt-8">
                    {footerSocialNetworks.map(({ id, icon, link }) => (
                        <Link key={id} href={link} className="text-3xl text-white hover:text-primaryDark">
                            {icon}
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
