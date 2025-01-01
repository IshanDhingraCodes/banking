"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-44 top-44 border-4 border-black-2 rounded-xl hidden lg:block"
        >
          <Image
            src={"/icons/design1.png"}
            alt={"design1"}
            height={300}
            width={300}
            className="rounded-xl"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-72 -top-16 hidden lg:block"
        >
          <Image
            src={"/icons/auth-image.svg"}
            alt={"auth-image"}
            height={400}
            width={400}
            draggable="false"
          />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full text-black-1 font-inter font-semibold">
            🏦 Simplify Your Financial Life 🏦
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-inter text-center font-medium mt-6">
          Track, Manage, and Grow Your Money Effortlessly
        </h1>
        <p className="text-center font-ibm-plex-serif text-xl text-black-2 mt-8 max-w-2xl mx-auto">
          Connect multiple bank accounts, view your transactions, and gain
          insights into your spending—all in one place.
        </p>
        <div className="flex justify-center mt-12">
          <Link
            href={"/sign-in"}
            className="bg-bank-green-gradient font-inter text-white font-semibold whitespace-nowrap p-3 rounded-full "
          >
            Connect Your First Bank
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
