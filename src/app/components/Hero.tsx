import { Button } from "./ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[420px] w-full scroll-mt-24 items-center justify-center sm:min-h-[500px] md:min-h-[620px]"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('Background.webp')`
        }}
      />
      
      <div className="relative z-10 max-w-3xl px-4 text-center text-white sm:px-6">
        <h1 className="mb-4 text-3xl font-light leading-tight sm:text-5xl md:text-6xl">
          Discover the Art of <span className="font-semibold">LEAFJANI</span><br />
          Teas
        </h1>
        <p className="mb-8 text-base opacity-90 sm:text-lg">
          Indulge in our premium selection of handpicked teas from around the world
        </p>
        <Button
          asChild
          className="h-11 rounded-full bg-purple-600 px-6 text-sm text-white hover:bg-purple-700 sm:h-12 sm:px-8 sm:text-base"
        >
          <a href="#teas">
            Explore Now
          </a>
        </Button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
      </div>
    </section>
  );
}
