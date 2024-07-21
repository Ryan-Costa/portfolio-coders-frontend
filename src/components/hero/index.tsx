import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Ryan Costa", "a Front-end Developer", "a Software Engineer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[100vh] xl:h-[85vh] flex flex-col xl:flex-row items-center bg-bg-hero justify-center overflow-hidden">
        <div className="w-[23rem] pl-1 absolute top-40 flex items-center justify-start">
          <div>
            <h1 className="text-3xl text-black font-bold xl:text-6xl">
              Hi, I&apos;m
              <br />
              <span ref={ref} className="text-[2rem] auto-type text-red-c2">
                a Front-end Developer
              </span>
            </h1>
          </div>
        </div>
        <img
          src="https://iili.io/dKmV8U7.png"
          alt="Hero Ryan"
          className="absolute bottom-0 w-[650px]"
        />
      </div>
    </>
  );
};
