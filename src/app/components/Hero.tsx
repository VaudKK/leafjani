import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Background.webp')`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-light mb-4">
          Discover the Art of <span className="font-semibold">LEAFJANI</span><br />
          Teas
        </h1>
        <p className="text-lg mb-8 opacity-90">
          Indulge in our premium selection of handpicked teas from around the world
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-base">
          Explore Now
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
      </div>
    </section>
  );
}
