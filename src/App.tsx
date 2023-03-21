import "./App.css";
import { Discord, FetchUserCount } from "./components/body";
import { Nav } from "./components/nav";

const App = () => (
  <div className="App">
    <Nav />
    <FetchUserCount />
    <div id="join-us">
      <Discord />
    </div>
    <div>For husky</div>
  </div>
);

export default App;
