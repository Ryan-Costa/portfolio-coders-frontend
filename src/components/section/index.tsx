import { useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import ImageToVideo from "../image-to-video";

interface SectionProps {
  name: string;
  firstText: string;
  secondText?: string;
  invert: boolean;
  imageUrl: string;
  videoUrl: string | undefined;
  images: string[];
  originalAnimation: boolean;
}

export const Section = ({
  name,
  firstText,
  secondText,
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

  console.log(hasBeenVisible);

  return (
    <section
      ref={ref}
      className={`px-[8rem] w-screen h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center ${
        invert ? "bg-background" : "bg-primary-rgba"
      }`}
    >
      <div
        className={`flex gap-10 ${invert ? "flex-row-reverse" : "flex-row"} `}
      >
        <div
          className={`${
            hasBeenVisible ? "animate-slide-in-from-left" : "opacity-0"
          } flex flex-col items-start justify-start w-full gap-12 min-w-[40rem]`}
        >
          <div
            className={`flex flex-col items-start justify-start w-full gap-12`}
          >
            <h2 className={`text-5xl font-bold`}>{name}</h2>
            <p className={`leading-8 text-2xl font-normal`}>{firstText}</p>
            <p className={`leading-8 text-2xl font-normal`}>{secondText}</p>
          </div>

          {images && (
            <div className="flex flex-col gap-8 z-0 ">
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`${
                      hasBeenVisible
                        ? "animate-slide-in-from-left"
                        : "opacity-0"
                    } w-28 h-28 shadow-shape p-4`}
                    style={{
                      animationDelay: `${Math.min(100 * index, 350)}ms`,
                    }}
                  />
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
