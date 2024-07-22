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
      className={`my-12 px-[1rem] xs:px-[1.25rem] sm:px-[1.5rem] md:px-[1.75rem] lg:px-[2rem] w-full flex items-center justify-center bg-center bg-no-repeat ${
        invert ? "bg-pattern" : "bg-gradient-radial"
      }`}
    >
      <div
        className={`xl:max-w-[1440px] flex gap-4 xl:gap-8 flex-col ${
          invert ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}
      >
        <div
          className={`${
            hasBeenVisible ? "xl:animate-slide-in-from-left" : "xl:opacity-0"
          } flex flex-col items-start justify-between w-full  gap-4`}
        >
          <div
            className={`flex flex-col items-center xl:items-start justify-start w-full gap-4`}
          >
            <h2
              className={`text-title-sm md:text-title-md lg:text-title-lg xl:text-title-xl font-semibold`}
            >
              {title}
            </h2>

            {text.primary && (
              <p
                className={`text-normal-sm md:text-normal-md lg:text-normal-lg xl:text-normal-xl font-normal`}
              >
                {text.primary}
              </p>
            )}
            {text.secondary && (
              <p
                className={`text-normal-sm md:text-normal-md lg:text-normal-lg xl:text-normal-xl font-normal`}
              >
                {text.secondary}
              </p>
            )}
            {text.tertiary && (
              <p
                className={`text-normal-sm md:text-normal-md lg:text-normal-lg xl:text-normal-xl font-normal`}
              >
                {text.tertiary}
              </p>
            )}
          </div>
          {subtitle && (
            <p
              className={`text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg xl:text-subtitle-xl font-semibold`}
            >
              {subtitle}
            </p>
          )}

          {images && (
            <div className="w-full flex flex-col gap-8 z-0 ">
              <div className="w-full grid grid-cols-4 grid-rows-1 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-[9/12] flex flex-col items-center justify-center gap-3 bg-hobby 
                      shadow-shape backdrop-blur-[20px] rounded-lg lg:${
                        hasBeenVisible
                          ? "animate-slide-in-from-left"
                          : "opacity-0"
                      }`}
                  >
                    <img
                      className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                      src={image.url}
                      alt={image.description || `Hobby ${index + 1}`}
                      style={{
                        animationDelay: `${Math.min(100 * index, 350)}ms`,
                      }}
                    />
                    <span className="text-clamp font-bold text-tx-hobby">
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
