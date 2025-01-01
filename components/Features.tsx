import React from "react";
import FeaturesColumn from "./FeaturesColumn";
import { features } from "@/constants";

export type FeatureType = typeof features;

const Features = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <h2 className="text-6xl font-inter font-medium text-center sm:text-center md:text-start ">
              Best <span className="text-green-700">features</span> provided by
              us
            </h2>
            <p className="text-black-2 mt-4 text-lg font-ibm-plex-serif text-justify md:text-start">
              We leverage the latest banking technology to provide you the
              convinient and efficient banking solutions.
            </p>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <FeaturesColumn features={features} />
              <FeaturesColumn
                features={features.slice().reverse()}
                className="hidden md:flex flex-col"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
