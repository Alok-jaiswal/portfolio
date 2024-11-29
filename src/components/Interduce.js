import React from "react";
// import Tilt from "react-parallax-tilt";
import { useLottie } from "lottie-react";
import htmlLog from "../util/html-dev.json"

function Interduce() {
  const options = {
    animationData: htmlLog,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative overflow-hidden">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 my-10">
          LET ME <p className="text-[#ad50eb]">INTRODUCE</p> MYSELF
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-3/4 lg:mr-10">
          <span className="flex flex-col gap-3 text-white items-start  text-base text-justify justify-center font-semibold lg:text-lg">
            <p>
              I am Alok Jaiswal, a proficient Full-stack Web Developer from
              Nagpur with 3+ years of experience in developing high-performance
              web applications. My expertise includes React, Next.js, Node.js,
              Express.js, and Nest.js. I have expertise in building smooth and
              efficient digital solutions. I am a Tech Lead & Web Developer at
              PERLA IT Pvt. Ltd. Optimizing site performance and user experience
              by using Next.js is what I do. Being interested in learning,
              paying great attention to details, and striving for excellence
              drives my passion to deliver impactful digital experiences.
            </p>
            <p>
              Let's connect to innovate and build extraordinary projects
              together!
            </p>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-10">
        {/* <Tilt>
          <img src="man.png" alt="" className="object-cover" />
        </Tilt> */}
        <>{View}</>
      </div>
    </div>
  );
}

export default Interduce;
