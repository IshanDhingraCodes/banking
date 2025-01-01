import Link from "next/link";
import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  return (
    <section className="pt-16">
      <div className="bg-[#F1F1F1] p-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Link
              href="/"
              className="cursor-pointer items-center gap-1 px-4 flex"
            >
              <Image
                src="/icons/logo.svg"
                alt="Horizon logo"
                width={34}
                height={34}
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Horizon
              </h1>
            </Link>
          </div>
          <div>
            <p className="font-inter text-black-2 text-sm">
              © 2025 Horizon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFooter;
