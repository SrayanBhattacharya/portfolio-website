import { useEffect } from "react";
import { MdMenu } from "react-icons/md";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 px-1 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between font-mono">
          <a href="#home" className="font-mono text-xl font-bold text-gray-300">
            <span className="ml-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {"<Srayan />"}
            </span>
          </a>

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="absolute right-7 z-40 cursor-pointer font-mono text-2xl md:hidden"
            >
              <MdMenu />
            </div>
          )}

          <div className="flex items-center space-x-8 md:flex">
            <div className="hidden items-center space-x-8 md:flex">
              <a
                href="#home"
                className="text-lg text-gray-300 transition-all hover:text-xl hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-lg text-gray-300 transition-all hover:text-xl hover:text-white"
              >
                About
              </a>
              <a
                href="#project"
                className="text-lg text-gray-300 transition-all hover:text-xl hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-lg text-gray-300 transition-all hover:text-xl hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
