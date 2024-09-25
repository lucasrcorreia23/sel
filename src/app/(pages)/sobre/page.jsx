import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionSection from "@components/sections/CallToAction";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import TeamSEL from "../../_components/sections/TeamSEL";


const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const CompanySlider = dynamic( () => import("@components/sliders/Company"), { ssr: false } );
const ProcessSlider = dynamic( () => import("@components/sliders/Process"), { ssr: false } );
const CompanyTwoSlider = dynamic( () => import("@components/sliders/CompanyTwo"), { ssr: false } );


export const metadata = {
  title: {
		default: "Sobre a SEL",
	},
  description: AppData.settings.siteDescription,
}

const Sobre = () => {
  return (
    <>
      <PageBanner pageTitle={"Sobre a SEL"} breadTitle={"Sobre a SEL"} bgImage={"/img/photo/18.jpg"} />     
      <CompanyTwoSlider />
    <TeamSEL/>     
    
    <CallToActionSection />
    </>
  );
};
export default Sobre;