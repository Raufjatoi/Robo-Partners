
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-roboblack/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="robo1.png" 
              alt="Robo Growth Partners Logo" 
              className="h-16 md:h-20"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-roboblue hover:bg-roboblue-light text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-roboblack/95 backdrop-blur-lg py-5 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors py-2" onClick={toggleMenu}>Contact</a>
            <Button className="bg-roboblue hover:bg-roboblue-light text-white w-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
