import { useState } from "react";

interface ImageToVideoProps {
  imageUrl: string;
  videoUrl?: string;
  hasBeenVisible: boolean;
  originalAnimation: boolean;
}

const ImageToVideo = ({
  imageUrl,
  videoUrl,
  hasBeenVisible,
  originalAnimation,
}: ImageToVideoProps) => {
  const [hover, setHover] = useState(false);

  const cursorMobileDetector = window.matchMedia("(pointer: coarse)").matches;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        hasBeenVisible
          ? `${
              originalAnimation
                ? "xl:animate-slide-in-from-left"
                : "xl:animate-slide-in-from-right"
            }`
          : "opacity-0"
      } w-full h-full rounded-lg z-20 overflow-hidden`}
    >
      {videoUrl ? (
        hover || cursorMobileDetector ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full aspect-video xl:aspect-auto max-h-[560px] object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt="Thumbnail"
            className="w-full h-full aspect-video xl:aspect-auto xl:max-h-[560px] object-cover"
          />
        )
      ) : (
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="w-full h-full aspect-video xl:aspect-auto 2xl:max-h-[560px] object-cover"
        />
      )}
    </div>
  );
};

export default ImageToVideo;
