"use client";
import { faqs } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24" id="faq">
      <div className="container select-none">
        <h2 className="text-6xl font-inter font-medium text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-green-700">answers</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-[#F1F1F1] rounded-2xl border border-[#E5E5E5] p-6"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(index)}
              >
                <h3 className="font-inter text-black-1 font-medium">
                  {faq.question}
                </h3>
                <Image
                  src={"/icons/plus.svg"}
                  alt={"plus"}
                  width={20}
                  height={20}
                  className={twMerge(
                    "flex-shrink-0 transation duration-300",
                    selectedIndex === index && "rotate-45"
                  )}
                />
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("overflow-hidden")}
                  >
                    <p className="text-black-2 text-justify">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
