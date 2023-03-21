import "./App.css";
import { Nav } from "./components/nav";
import { FetchUserCount, Discord } from "./components/body";

function App() {
  return (
    <div className="App font-nunito h-full">
      <header className="sticky top-0 pt-4 pb-[14px] z-10 bg-slate-800 border-solid border-b-2 border-yellow-400">
        <Nav />
      </header>
      <main className="relative my-4">
        <FetchUserCount />
        <div className="h-96 scroll-mt-[88px]" id="join-us">
          <Discord />
        </div>
        <div className="h-96 scroll-mt-[88px]" id="raid-progression">
          <Discord />
        </div>
        <div className="h-96 scroll-mt-[88px]" id="corner">
          <Discord />
        </div>
      </main>
      <footer>Footer content here</footer>
    </div>
  );
}

export default App;
