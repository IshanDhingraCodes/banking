"use client";
import { logos } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-black-1 text-xl font-inter select-none">
          All Your Banks, One Platform, Powered by Dwolla.
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-none gap-24 pr-24"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    src={"/icons/" + logo.image}
                    alt={"logo.alt"}
                    key={logo.alt}
                    width={150}
                    height={150}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
