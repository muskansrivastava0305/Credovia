import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-900 text-white fixed w-full top-0">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-80} // Navbar ki height adjust karne ke liye
        className="cursor-pointer"
      >
        Home
      </Link>

      <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
        About
      </Link>

      <Link to="core-offering" smooth={true} duration={500} offset={-80} className="cursor-pointer">
        Core Offering
      </Link>

      <Link to="how-it" smooth={true} duration={500} offset={-80} className="cursor-pointer">
        How It Works
      </Link>

      <Link to="why" smooth={true} duration={500} offset={-80} className="cursor-pointer">
        Why Us
      </Link>

      <Link to="cta" smooth={true} duration={500} offset={-80} className="cursor-pointer">
        Get Started
      </Link>
    </nav>
  );
}
