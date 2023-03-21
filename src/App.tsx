import "./App.css";
import { Nav } from "./components/nav";
import { FetchUserCount, Discord } from "./components/body";

function App() {
  return (
    <div className="App font-nunito">
      <Nav />
      <FetchUserCount />
      <div id="join-us">
        <Discord />
      </div>
    </div>
  );
}

export default App;
