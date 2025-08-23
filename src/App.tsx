import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Projects />
    </>
  );
}
