import "./App.css";
import Discord from "./components/Discord";
import FeatureList from "./components/FeatureList";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App font-nunito h-full bg-purple text-gold">
      <main className="max-w-5xl mx-auto flex flex-col gap-y-8 py-8">
        <Nav />
        <HeroBanner />
        <FeatureList />
        <Discord />
        <Footer />
      </main>
    </div>
  );
};

export default App;
