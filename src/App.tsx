import "./App.css";
import { Nav } from "./components/nav";
import { FetchUserCount, Discord } from "./components/body";
import HeroBanner from "./assets/hero-banner-1200px.png"

function App() {
  return (
    <div className="App font-nunito h-full bg-purple text-gold">
      <div className="max-w-5xl mx-auto">
        <header className="sticky top-0 pt-4 pb-[14px] z-10">
          <Nav />
        </header>
        <div className="relative h-96">
          <div className="absolute top-0 -translate-x-2/4 inset-x-1/2 w-screen max-w-screen-xl bg-dark h-full xl:rounded-2xl overflow-hidden">
            <img src={HeroBanner} className="h-full w-full object-cover" />
          </div>
        </div>
        <main className="relative my-4">
          <FetchUserCount />
          <div className="scroll-mt-[88px]" id="join-us">
            <Discord />
          </div>
        </main>
        <footer>Footer content here</footer>
      </div>
    </div>
  );
}

export default App;
