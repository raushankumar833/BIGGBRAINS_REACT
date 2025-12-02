import React, { useEffect } from "react";
import HomeCenter from "../Components/HomeCenter";
import HomeHero from "../Components/HomeHero";
import HeroSection from "../Components/HeroSection";
import HelpYou from "../Components/HelpYou";
import CoreValues from "../Components/CoreValues";
import BusinessCard from "../Components/BusinessesCard";
import Mission from "../Components/Mission";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeHero />
      <HomeCenter />
      <HelpYou />
      <CoreValues />
      <BusinessCard />
      <Mission />
      <HeroSection />
    </>
  );
}

export default Home;
