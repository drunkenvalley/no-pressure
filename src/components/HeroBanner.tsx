import HeroBannerImg from "../assets/hero-banner-1280px.png";

const HeroBanner = () => (
  <div className="relative h-96">
    <div className="absolute top-0 -translate-x-2/4 inset-x-1/2 w-screen max-w-screen-xl bg-dark h-full xl:rounded-2xl overflow-hidden">
      <img src={HeroBannerImg} className="h-full w-full object-cover" />
    </div>
  </div>
);

export default HeroBanner;
