"use client";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";

type Props = {
  images: { src: string; alt?: string; text?: string }[];
};

const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  useEffect(() => {
    const intervalId = setInterval(() => nextImage(), 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="h-full overflow-hidden relative">
      <div className="flex" style={{ translate: `-${currentImage * 100}%` }}>
        {images.map((image, index) => (
          <div key={index} className="relative min-w-full">
            <Image
              width={1080}
              height={640}
              loading="lazy"
              src={image.src}
              alt={image.alt || ""}
              className="h-full w-full"
            />
            <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase text-center text-slate-200">
              {image.text || ""}
            </h2>
          </div>
        ))}
      </div>
      <div className="absolute w-full flex justify-between top-[50%] translate-y-[-50%] px-4">
        <div
          className="bg-slate-100 rounded-full flex items-center justify-center h-8 w-8 bg-opacity-80"
          onClick={prevImage}
        >
          <NavigateBeforeIcon />
        </div>

        <div
          className="bg-slate-100 rounded-full flex items-center justify-center h-8 w-8 bg-opacity-80"
          onClick={nextImage}
        >
          <NavigateNextIcon />
        </div>
      </div>
      <div className="absolute flex w-full items-center justify-center bottom-3 gap-x-2">
        {images.map((image, index) => (
          <div key={index} className="text-[0.75rem]">
            <CircleIcon
              fontSize="inherit"
              className="text-slate-100"
              style={{ opacity: index === currentImage ? "0.8" : ".3" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
