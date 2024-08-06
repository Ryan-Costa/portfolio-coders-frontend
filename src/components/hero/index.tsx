import { useEffect, useRef } from "react";
import Typed from "typed.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Ryan Costa",
        `a Front-end <br/> Developer`,
        "a Software Engineer",
      ],
      typeSpeed: 150,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[100vh] xl:h-[85vh] flex flex-col xl:flex-row items-center bg-bg-hero justify-end xl:justify-between overflow-hidden">
        <div
          className="box-text absolute xl:static xl:opacity-0 xl:animate-slide-in-from-left
          flex items-center justify-start xl:flex-col xl:items-start xl:justify-between
          top-[6rem] sm:top-[5rem] md:top-[3rem]
          md:text-6xl xl:text-clamp4
          xl:bg-red-800 w-[20rem] md:w-[26rem] mdx:w-[45vw] xl:h-full 
          pl-[1rem] xl:pl-[8rem] xl:py-[2rem]
      "
        >
          <a
            href="https://www.codigocertocoders.com.br/"
            className="xl:opacity-0 xl:animate-slide-in-from-left hidden top-[3rem] xl:flex p-1 bg-white/60 rounded-lg"
          >
            <img className="w-24" src="/logo-coders.webp" alt="coders" />
          </a>
          <h1 className="leading-[1] text-clamp2 text-black font-bold xl:text-6xl h-[252px]">
            Hi, I&apos;m
            <br />
            <span
              ref={ref}
              className="text-clamp2 auto-type text-red-c2 xl:text-white/60"
            ></span>
          </h1>

          <div
            className={`hidden w-full md:w-fit xl:flex items-center justify-center md:justify-end gap-8`}
          >
            <a
              href="https://github.com/Ryan-Costa"
              target="_blank"
              title="Acessar GitHub de Ryan Costa"
              className="xl:opacity-0 xl:animate-slide-in-from-left animation-delay-200"
            >
              <GitHubIcon
                sx={{ fontSize: "2.6rem" }}
                className="text-black hover:fill-white/60"
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
                className="text-black hover:fill-white/60"
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
                className="text-black hover:fill-white/60"
              />
            </a>
          </div>
        </div>

        <div className="opacity-0 animate-slide-in-from-up absolute bottom-0 right-0 xl:w-[55vw] w-full flex justify-center items-end xl:items-center">
          <img
            src="/image-hero.webp"
            alt="Hero Ryan"
            className="image-hero min-w-[480px] w-full max-w-[700px] xs:max-w-[530px] xl:max-w-[600px] -mb-[2rem] xl:-mb-[6rem] aspect-[3/4]"
          />
        </div>
      </div>
    </>
  );
};
