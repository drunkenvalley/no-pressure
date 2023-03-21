import "./App.css";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="h-screen" id="home">
        HOME
      </div>
      <div className="h-screen" id="join-us">
        JOIN US
      </div>
      <div className="h-screen" id="raid-progression">
        Raid progression
      </div>
      <div className="h-screen" id="corner">
        Bruxy&apos;s Corner
      </div>
    </div>
  );
}

export default App;
