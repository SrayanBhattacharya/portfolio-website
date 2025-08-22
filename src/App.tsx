import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
