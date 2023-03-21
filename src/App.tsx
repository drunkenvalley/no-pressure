import "./App.css";
import { Discord, FetchUserCount } from "./components/body";
import HeroBanner from "./components/HeroBanner";
// import { Nav } from "./components/nav";

const App = () => (
  <div className="App font-nunito h-full bg-purple text-gold">
    <div className="max-w-5xl mx-auto">
      <header className="sticky top-0 pt-4 pb-[14px] z-10">
        {/* <Nav /> */}
      </header>
      <HeroBanner />
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

export default App;
