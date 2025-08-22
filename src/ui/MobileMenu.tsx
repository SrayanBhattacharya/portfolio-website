import { RxCross2 } from "react-icons/rx";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center gap-15 bg-[rgba(10,10,10,0.8)] transition-all duration-300 ease-in-out ${isMenuOpen ? "pointer-events-auto h-screen opacity-100" : "pointer-events-none h-0 opacity-0"}`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 cursor-pointer text-2xl focus:outline-none"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      <a
        onClick={() => setIsMenuOpen(false)}
        href="#home"
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} `}
      >
        Home
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#about"
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} `}
      >
        About
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#project"
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} `}
      >
        Projects
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#contact"
        className={`my-4 transform text-2xl font-semibold text-white transition-transform duration-300 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} `}
      >
        Contact
      </a>
    </div>
  );
}
