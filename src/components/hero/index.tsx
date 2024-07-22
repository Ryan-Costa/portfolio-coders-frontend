import { useEffect, useRef } from "react";
import Typed from "typed.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
      <div className="relative w-full h-[100vh] xl:h-[85vh] flex flex-col xl:flex-row items-center bg-bg-hero justify-end xl:justify-between overflow-hidden">
        <div className="absolute top-[6rem] xxs:top-[4rem] xs:top-[5rem] mdx:top-[3rem] w-full xs:w-[30rem] md:w-3/4 xl:w-3/5 xl:h-full pl-[1rem] xl:pl-[8rem] xl:static flex items-center justify-start xl:flex-col xl:items-start xl:justify-between xl:pt-[16rem] 2xl:pt-[20rem] xl:pb-[4rem] ">
          <h1 className="text-clamp2 text-black font-bold xl:text-6xl">
            Hi, I&apos;m
            <br />
            <span ref={ref} className="text-clamp2 auto-type text-red-c2">
              a Front-end Developer
            </span>
          </h1>

          <div
            className={`hidden w-full md:w-fit xl:flex items-center justify-center md:justify-end gap-8`}
          >
            <a
              href="https://github.com/Ryan-Costa"
              target="_blank"
              title="Acessar GitHub de Ryan Costa"
              className="opacity-0 animate-slide-in-from-left animation-delay-200"
            >
              <GitHubIcon
                sx={{ fontSize: "2.6rem" }}
                className="text-black hover:fill-red-c2"
              />
            </a>
            <a
              href="https://wa.me/5585991623247?text=Olá,%20Ryan!%20Estou%20vindo%20através%20do%20seu%20portfólio!"
              target="_blank"
              title="Entrar em contato com Ryan Costa"
              className="opacity-0 animate-slide-in-from-left animation-delay-400"
            >
              <WhatsAppIcon
                sx={{ fontSize: "2.6rem" }}
                className="text-black hover:fill-red-c2"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ryancosta122"
              target="_blank"
              title="Acessar Linkedin de Ryan Costa"
              className="opacity-0 animate-slide-in-from-left animation-delay-600"
            >
              <LinkedInIcon
                sx={{ fontSize: "2.6rem" }}
                className="text-black hover:fill-red-c2"
              />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 xl:w-2/5 w-full flex justify-center items-end xl:items-center">
          <img
            src="https://iili.io/dKmV8U7.png"
            alt="Hero Ryan"
            className="w-full xs:w-[500px] sm:w-[500px] 2xl:w-[600px] -mb-[2rem] xl:-mb-[6rem] aspect-[3/4]"
          />
        </div>
      </div>
    </>
  );
};
