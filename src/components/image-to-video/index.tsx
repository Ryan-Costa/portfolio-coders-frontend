import { useState } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

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
  const [muted, setMuted] = useState(false);

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
      } w-full h-full rounded-lg z-20 overflow-hidden relative`}
    >
      {videoUrl ? (
        hover || cursorMobileDetector ? (
          <>
            <video
              autoPlay
              loop
              muted={!muted}
              playsInline
              className="w-full h-full aspect-video xl:aspect-auto max-h-[560px] object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setMuted((prev) => !prev)}
              className="absolute top-2 right-2"
              title={muted ? "Silenciar silenciar" : "Ativar música"}
            >
              {muted ? (
                <div className="flex gap-2 p-2 bg-black">
                  <span>Desativar música</span>
                  <VolumeOffIcon />
                </div>
              ) : (
                <div>
                  <div className="flex gap-2 p-2 bg-black">
                    <span>Ativar música</span>
                    <VolumeUpIcon />
                  </div>
                </div>
              )}
            </button>
          </>
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
