import React from "react";

const About = () => {
  return (
    <section className="py-24" id="features">
      <div className="container overflow-x-clip">
        <div className=" bg-bank-green-gradient rounded-s-[50px] p-10  overflow-x-clip">
          <div className="font-inter font-semibold  ml:20">About</div>
          <div className="flex flex-col md:flex-row justify-around mt-3 gap-3">
            <div className="font-bold lg:text-5xl md:text-4xl text-3xl">
              Best features provided by us
            </div>
            <div className="font-ibm-plex-serif">
              With a legacy trust and a commitment to innovation, we&apos;re
              here to serve your banking needs and help you achieve your
              financial goals.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
