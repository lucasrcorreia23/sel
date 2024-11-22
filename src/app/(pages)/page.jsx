import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/clients";

import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestsClient";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";
import CoresSection from "@components/sections/Cores";
import CallToActionSection from "../_components/sections/CallToAction";

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );



async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      <PartnersSlider />
      <AboutSection />
      <IdeasSection />
      <ServicesSection />
      <AdvantagesSection />      
      <HowWeWorkSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <CallToActionSection />    
     
    </>
  );
};
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}