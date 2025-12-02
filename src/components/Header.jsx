import { GraduationCap, Phone, Menu } from "lucide-react";
import { useState } from "react";

const navlist = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
   { href: "#contact", text: "Contact" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="scroll-mt-20 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-600">
            Emmanuel's Portfolio
          </span>
        </div>
        <nav className="hidden md:flex space-x-4 text-gray-700 font-medium">
          {navlist.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-sky-600 transition"
            >
              {item.text}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Phone className="w-6 h-6 text-sky-600" />
          <a
            href="tel:+27613235366"
            className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
          >
            Call Now
          </a>
          <span className="text-gray-700 font-medium">+27613235366</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="focus:outline-none"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md p-4 space-y-3 text-gray-700 font-medium">
          {navlist.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 hover:text-sky-600"
            >
              {item.text}
            </a>
          ))}
          <div className="mt-4 flex items-center space-x-4">
            <Phone className="w-6 h-6 text-sky-600" />
            <span className="text-gray-700 font-medium">+123 456 7890</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
