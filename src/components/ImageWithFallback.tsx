"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      src={imgSrc}
    />
  );
};

export default ImageWithFallback;
