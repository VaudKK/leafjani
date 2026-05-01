import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#teas", label: "Teas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold tracking-wider sm:gap-3 sm:text-xl"
          style={{ color: "#59168B" }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="logo.png" alt="LeafJani logo" className="h-14 w-14 object-contain sm:h-20 sm:w-20" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:text-purple-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-full border border-gray-200 p-2.5 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} border-t border-gray-200 bg-white md:hidden`}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-purple-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
