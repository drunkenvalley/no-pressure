import Image from "next/image";

const HeroBanner = ({ alt, src }: { alt: string, src: string }) => (
  <div className="relative h-96 scroll-mt-[136px]" id="home">
    <div className="absolute top-0 -translate-x-2/4 inset-x-1/2 w-screen max-w-screen-xl bg-dark h-full xl:rounded-2xl overflow-hidden">
      <Image
        alt={alt}
        className="w-full max-w-[1280px] h-[384] object-cover"
        fill
        src={src}
        unoptimized
      />
    </div>
  </div>
);

export default HeroBanner;
