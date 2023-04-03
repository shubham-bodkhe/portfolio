import logo from "./logo.svg";
import "./App.css";
import Navabar from "./Components/Navabar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navabar></Navabar>
      <Introduction></Introduction>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
