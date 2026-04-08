import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider" style={{ color: "#59168B" }}>
          LEAFJANI
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm hover:text-purple-600 transition-colors">Home</a>
          <a href="/Teas" className="text-sm hover:text-purple-600 transition-colors">Teas</a>
          <a href="/Reviews" className="text-sm hover:text-purple-600 transition-colors">Reviews</a>
          <a href="/About" className="text-sm hover:text-purple-600 transition-colors">About</a>
          <a href="/Contact" className="text-sm hover:text-purple-600 transition-colors">Contact</a>
        </nav>
        
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
          Sign In
        </Button>
      </div>
    </header>
  );
}
