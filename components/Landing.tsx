import React from "react";
import LandingNavbar from "./LandingNavbar";
import Hero from "./Hero";
import LogoTicker from "./LogoTicker";
import About from "./About";
import Features from "./Features";
import Faqs from "./Faqs";
import CallToAction from "./CallToAction";
import LandingFooter from "./LandingFooter";

const Landing = () => {
  return (
    <section>
      <LandingNavbar />
      <Hero />
      <LogoTicker />
      <About />
      <Features />
      <Faqs />
      <CallToAction />
      <LandingFooter />
    </section>
  );
};

export default Landing;
