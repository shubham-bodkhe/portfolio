import logo from "./logo.svg";
import "./App.css";
import Navabar from "./Components/Navabar";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navabar></Navabar>
        <Introduction></Introduction>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
