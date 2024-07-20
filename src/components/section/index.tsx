import { useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import ImageToVideo from "../image-to-video";

interface SectionProps {
  title: string;
  subtitle: string | null;
  text: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  imageUrl: string;
  videoUrl: string | undefined;
  images:
    | {
        url: string;
        description: string | null;
      }[]
    | null;
  originalAnimation: boolean;
  invert: boolean;
}

export const Section = ({
  title,
  subtitle,
  text,
  invert = true,
  imageUrl,
  videoUrl,
  images,
  originalAnimation,
}: SectionProps) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  if (isIntersecting && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  return (
    <section
      ref={ref}
      className={`px-[1rem] sm:px-[8rem] w-full flex items-center justify-center bg-center bg-no-repeat ${
        invert ? "bg-pattern" : "bg-gradient-radial"
      }`}
    >
      <div
        className={`flex gap-10 flex-col ${
          invert ? "xl:flex-row-reverse" : "xlflex-row"
        }`}
      >
        <div
          className={`${
            hasBeenVisible ? "animate-slide-in-from-left" : "opacity-0"
          } flex flex-col items-start justify-start min-w-full w-full gap-6 lg:gap-9 xl:gap-12`}
        >
          <div
            className={`flex flex-col items-start justify-start w-full gap-6 lg:gap-9 xl:gap-12`}
          >
            <h2 className={`text-4xl lg:5xl font-bold`}>{title}</h2>
            <p className={`text-xl lg:2xl font-normal`}>{text.primary}</p>

            <p className={`text-xl lg:2xl font-normal`}>{text.secondary}</p>

            {subtitle && (
              <p className={`text-2xl lg:text-3xl font-bold`}>{subtitle}</p>
            )}
          </div>

          {images && (
            <div className="w-full flex flex-col gap-8 z-0 ">
              <div className="w-full grid grid-cols-2 grid-rows-2 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-full h-48 flex flex-col items-center justify-center gap-5 bg-hobby 
                      shadow-shape backdrop-blur-[20px] rounded-lg lg:${
                        hasBeenVisible
                          ? "animate-slide-in-from-left"
                          : "opacity-0"
                      }`}
                  >
                    <img
                      src={image.url}
                      alt={image.description || `Hobby ${index + 1}`}
                      style={{
                        animationDelay: `${Math.min(100 * index, 350)}ms`,
                      }}
                    />
                    <span className="text-lg font-bold text-tx-hobby">
                      {image.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ImageToVideo
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          originalAnimation={originalAnimation}
          hasBeenVisible={hasBeenVisible}
        />
      </div>
    </section>
  );
};

export default Section;
