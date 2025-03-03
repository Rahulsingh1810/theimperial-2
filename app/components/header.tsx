"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whoWeAreSubmenu = [
    { href: "/who-we-are/leadership", label: "Our Leadership" },
    { href: "/who-we-are/offices", label: "Our Offices" },
    { href: "/who-we-are/careers", label: "Careers" },
  ];

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do" },
    {
      href: "/who-we-are",
      label: "Who We Are",
      submenu: whoWeAreSubmenu,
      hasSubmenu: true,
    },
    { href: "/news-company-insights", label: "News and Company Insights" },
    { href: "/lp-login", label: "LP Login" },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl bg-pantone-dark text-white p-4">
            The Imperial Crest
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  {item.hasSubmenu ? (
                    <div>
                      <button className="flex items-center hover:text-pantone-dark peer">
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div
                        className="absolute left-0 mt-2 w-48 bg-pantone-dark text-white shadow-lg 
                                 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible
                                 hover:opacity-100 hover:visible
                                 transition-all duration-150 transform -translate-y-2 peer-hover:translate-y-0
                                 peer-focus:translate-y-0"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-pantone"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className="hover:text-gray-300">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            
            <button className="lg:hidden" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-pantone-dark z-50 lg:hidden transform transition-transform duration-300 ease-in-out backdrop-blur-md bg-opacity-90 ${
          isMenuOpen ? "translate-x-0 " : "translate-x-full  hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-6 bg-zinc-100">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold" onClick={toggleMenu}>
              The Imperial Crest
            </Link>
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.hasSubmenu ? (
                    <>
                      <button
                        className="text-2xl hover:text-gray-300 w-full text-left flex items-center"
                        onClick={() => setIsWhoWeAreOpen(!isWhoWeAreOpen)}
                      >
                        {item.label}
                        <ChevronDown className="ml-2 h-6 w-6" />
                      </button>
                      <div
                        className={`transition-all transform duration-300 ease-in-out overflow-hidden ${
                          isWhoWeAreOpen
                            ? "max-h-screen opacity-100 visible translate-y-0"
                            : "max-h-0 opacity-0 invisible translate-y-4"
                        }`}
                      >
                        <ul className="ml-4 mt-4 space-y-4">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="text-xl hover:text-gray-300"
                                onClick={toggleMenu}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-2xl hover:text-gray-300"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button
                  variant="outline"
                  className="w-full text-pantone border-white hover:bg-gray-100 text-xl py-3"
                >
                  <Link onClick={toggleMenu} href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
