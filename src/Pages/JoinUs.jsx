import React, { useEffect } from "react";
import BusinessCard from "../Components/BusinessesCard";
import PartnersHome from "../Components/PartnersHome";
import PartnersHero from "../Components/PartnersHero";

function JoinUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PartnersHome />
      <PartnersHero />
      <BusinessCard />
    </>
  );
}

export default JoinUs;
