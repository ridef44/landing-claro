import { BestBusiness } from "@/components/BestBusiness";
import { ShopMarket } from "@/components/ShopMarket";
import { ControlBilling } from "@/components/ControlBilling";
import { ServiceData } from "@/components/ServiceData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Testimonials } from "@/components/Testimonials";
import { Footer2 } from "@/components/Footer2";

export default function Home() {
  return (
    <>
      <Header /> {/* Nav bar*/}
      <FirstBlock />  {/* Galeria*/}
      <Testimonials /> {/* Banner america movil */}
      <ServiceData />  {/* En que podemos ayudarte */}
      <ShopMarket />  {/* Catalogo*/}
      <BestBusiness />  {/* Nuestras tiendas*/}
      <ControlBilling />  {/* Claro trasparente*/}
      
      <PaymentsMethods /> {/* Tienes alguna duda */}
      <Footer /> 
      <Footer2 />
    </>
  )
}
