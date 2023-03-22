import "./App.css";
import Discord from "./components/Discord";
import FeatureList from "./components/FeatureList";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";

const App = () => (
  <div className="App font-nunito h-full bg-purple text-gold">
    <main className="max-w-5xl mx-auto flex flex-col gap-y-8 py-8">
      <header className="sticky top-0 py-4 z-10">
        <Nav />
      </header>
      <HeroBanner />
      <FeatureList />
      <Discord />
      <footer>Footer content here</footer>
    </main>
  </div>
);

export default App;
