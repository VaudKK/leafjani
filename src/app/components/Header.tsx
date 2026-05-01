export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">
        <a
          href="#home"
          className="flex items-center gap-3 text-xl font-bold tracking-wider"
          style={{ color: "#59168B" }}
        >
          <img src="logo.png" alt="LeafJani logo" className="h-20 w-20 object-contain" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="text-sm hover:text-purple-600 transition-colors">Home</a>
          <a href="#teas" className="text-sm hover:text-purple-600 transition-colors">Teas</a>
          <a href="#reviews" className="text-sm hover:text-purple-600 transition-colors">Reviews</a>
          <a href="#about" className="text-sm hover:text-purple-600 transition-colors">About</a>
          <a href="#contact" className="text-sm hover:text-purple-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
