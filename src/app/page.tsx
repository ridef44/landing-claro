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
      <Header />
      <FirstBlock />
      <ServiceData />
      <ShopMarket />
      <BestBusiness />
      <ControlBilling />
      <Testimonials />
      <PaymentsMethods />
      <Footer />
      <Footer2 />
    </>
  )
}
