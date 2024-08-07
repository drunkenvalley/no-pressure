import Image from "@/components/Image";

const HeroBanner = () => (
  <div className="relative h-96 scroll-mt-[136px]" id="home">
    <div className="absolute top-0 -translate-x-2/4 inset-x-1/2 w-screen max-w-screen-xl bg-dark h-full xl:rounded-2xl overflow-hidden">
      <Image
        alt="Dragonflight splash art"
        className="w-full h-full object-cover"
        height={384}
        responsive
        src="/tww_hero.png"
        width={{ lg: 1280, md: 1023, sm: 767 }}
      />
    </div>
  </div>
);

export default HeroBanner;
