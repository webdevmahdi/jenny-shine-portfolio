import React from "react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      href: "#home",
      active: true,
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Service",
      href: "#services",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "Blog",
      href: "#blog",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
    {
      name: "Contact Us",
      href: "#contact",
    },
  ];
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="bg-black rounded-2xl px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <span className="text-white font-bold text-xl">Mahdi Hasan</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white hover:text-orange transition-colors duration-300 relative ${
                  item.active ? "font-semibold" : "font-medium"
                }`}
              >
                {item.name}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
