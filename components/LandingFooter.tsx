import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  return (
    <section className="pt-16">
      <div className="bg-[#F1F1F1] p-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="flex items-center gap-2 select-none">
            <Image
              src={"/icons/logo.svg"}
              alt={"logo"}
              height={35}
              width={35}
            />
            <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1">
              Horizon
            </h1>
          </div>
          <div>
            <p className="font-inter text-black-2 text-sm select-none">
              © 2025 Horizon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
