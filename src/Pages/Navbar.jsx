import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // hamburger & close icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Core Offering", to: "core-offering" },
    { name: "How It Works", to: "how-it" },
    { name: "Why Us", to: "why" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-gray-900/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 ">
        {/* Left - Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
        </div>

        {/* Center - Links (Desktop) */}
<div className="hidden md:flex items-center space-x-6 bg-black/60 border border-[#D4AF37] px-6 py-2 rounded-full">
  {navLinks.map((link, index) => (
    <Link
      key={index}
      to={link.to}
      smooth={true}
      duration={500}
      offset={-80}
      activeClass="active-nav"
      className="relative cursor-pointer text-sm font-bold tracking-wide uppercase text-gray-300 
                 hover:text-white px-4 py-2 rounded-full transition-colors group"
    >
      {link.name}

      {/* underline animation */}
      <span className="absolute left-1/2 -bottom-0.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
  ))}
</div>




        {/* Right - Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="cta"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-400"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="block cursor-pointer hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="cta"
            smooth={true}
            duration={500}
            offset={-80}
            className="block bg-yellow-500 text-black px-4 py-2 rounded-lg text-center cursor-pointer hover:bg-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
