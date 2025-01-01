"use client";
import React, { Fragment } from "react";
import { type FeatureType } from "./Features";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const FeaturesColumn = (props: {
  features: FeatureType;
  className?: string;
  reverse?: boolean;
}) => {
  const { features, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className={(twMerge("flex flex-col gap-4 pb-4"), className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-[#F1F1F1] border border-[#E5E5E5] rounded-3xl p-6 my-2"
            >
              <div className="flex justify-center">
                <Image
                  src={`/icons/${feature.icon}`}
                  alt={feature.name}
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="text-3xl text-center mt-6 font-inter font-semibold">
                {feature.name}
              </h3>
              <p className=" text-black-2 mt-2 text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default FeaturesColumn;
