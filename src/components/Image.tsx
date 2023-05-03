import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import NextImage from "next/image";

type SizeLabelMapping = {
  lg: number;
  md: number;
  sm: number;
};
type Props = {
  alt: string;
  className: string;
  height: number;
  src: string;
  onClick?: (event: MouseEvent<HTMLImageElement>) => void;
} & (
  | {
      responsive?: false;
      width: number;
    }
  | {
      responsive: true;
      width: SizeLabelMapping;
    }
);

const Image = ({ responsive = false, src, width, ...props }: Props) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  const sizeLabel = screenWidth < 768 ? "sm" : screenWidth < 1024 ? "md" : "lg";
  let _src = src;
  let _width = width as number;

  if (src.startsWith("/")) {
    _src = "/images" + _src;
  }

  if (responsive) {
    _src = _src.replace(".", `_${sizeLabel}.`);
    _width = (width as SizeLabelMapping)[sizeLabel];
  }

  _width = Math.min(_width, screenWidth);

  return <NextImage src={_src} width={_width} {...props} />;
};

export default Image;
