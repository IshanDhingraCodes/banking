"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Mobile } from "@/constants";
const LandingNavbar = () => {
  return (
    <div className="container sticky top-0 py-4 lg:py-8 z-50 bg-transparent">
      {/* desktop Navbar */}
      <div className="w-full bg-[#F1F1F1]/90 backdrop-blur rounded-3xl py-4 px-12 font-inter max-md:hidden shadow-creditCard">
        <div className="flex justify-between items-center">
          <div className="flex justify-around mx-auto gap-12 max-lg:gap-5">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer select-none"
            >
              Home
            </ScrollLink>
            <Image
              src={"./icons/asterisk.svg"}
              alt={"asterisk"}
              height={20}
              width={20}
            />
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer select-none"
            >
              Features
            </ScrollLink>
          </div>

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
          <div className="flex justify-around gap-12 max-lg:gap-5 mx-auto">
            <ScrollLink
              to="faq"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer select-none"
            >
              FAQ
            </ScrollLink>
            <Image
              src={"./icons/asterisk.svg"}
              alt={"asterisk"}
              height={20}
              width={20}
            />
            <Link href="/sign-in" className="cursor-pointer select-none">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden bg-[#F1F1F1]/70 backdrop-blur rounded-3xl">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <Sheet>
            <SheetTrigger>
              <Image
                src="/icons/hamburger.svg"
                width={30}
                height={30}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-[#F1F1F1]">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
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
              </ScrollLink>

              <div className="mobilenav-sheet">
                <SheetClose asChild>
                  <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                    {Mobile.map((item) => {
                      return (
                        <SheetClose asChild key={item.route}>
                          {item.label === "Sign In" ? (
                            // Use Next.js Link for Sign-in page navigation
                            <Link
                              href={item.route}
                              key={item.label}
                              className="mobilenav-sheet_close w-full"
                            >
                              <p className="text-16 font-semibold text-black-2 cursor-pointer select-none">
                                {item.label}
                              </p>
                            </Link>
                          ) : (
                            // Use react-scroll's Link for smooth scrolling to sections
                            <ScrollLink
                              to={item.route}
                              key={item.label}
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={500}
                              className="mobilenav-sheet_close w-full"
                            >
                              <p className="text-16 font-semibold text-black-2 cursor-pointer select-none">
                                {item.label}
                              </p>
                            </ScrollLink>
                          )}
                        </SheetClose>
                      );
                    })}
                  </nav>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
