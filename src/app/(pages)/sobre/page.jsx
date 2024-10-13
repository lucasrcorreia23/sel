import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";
import { getSortedProjectsData } from "@library/projects"; // Importe a função de projetos

import PageBanner from "@components/PageBanner";
import TeamSEL from "../../_components/sections/TeamSEL";
import LatestProjectsSection from "../../_components/sections/LatestProjects";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import CallToActionSection from "@components/sections/CallToAction";
import TestimonialSlider from "../../_components/sliders/Testimonial";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });
const CompanyTwoSlider = dynamic(() => import("@components/sliders/CompanyTwo"), { ssr: false });

export const metadata = {
  title: {
    default: "Sobre a SEL",
  },
  description: AppData.settings.siteDescription,
};

async function Sobre() {
  // Aqui buscamos os projetos da mesma forma que no Home1
  const projects = await getAllProjects();

  return (
    <>
      <PageBanner pageTitle={"Sobre a SEL"} breadTitle={"Sobre a SEL"} bgImage={"/img/photo/18.jpg"} />
      <CompanyTwoSlider />
      <TeamSEL />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Passando os projetos como props */}
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <TestimonialSlider showPartners={0} />
      <ServicesTwoSection />
      
      <CallToActionSection />
    </>
  );
}

export default Sobre;

// Função para buscar todos os projetos
async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
