import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Project } from "./components/Project";
import { About } from "./components/About";
import { Blog } from "./components/Blog";

function App() {
  return (
    <div className="bg-blue-950 h-screen bg-gradient-to-r from-indigo-900">
      <NavBar />
      <Home />
      {/* <Project />
      <About />
      <Blog /> */}
    </div>
  );
}

export default App;
