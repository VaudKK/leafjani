export function OurStory() {
  return (
    <section id="about" className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-5 text-3xl font-semibold sm:mb-6 sm:text-4xl">Our Story</h2>
            <div className="space-y-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-relaxed">
              <p>
                Welcome to LeafJani, where tradition meets innovation in every cup. Our journey began 
                with a simple passion - to bring the world's finest teas to your table. Founded by tea 
                enthusiasts who traveled across continents, we've built relationships with the best tea 
                gardens and artisans.
              </p>
              <p>
                Each leaf is handpicked at the peak of freshness, ensuring that every brew delivers 
                an authentic and memorable experience. From the misty mountains of Darjeeling to the 
                lush valleys of Ceylon, we source our teas with care and respect for both the land 
                and the people who cultivate them.
              </p>
              <p>
                At LeafJani, we believe that tea is more than just a beverage - it's a ritual, a 
                moment of peace, and a connection to cultures around the world. Whether you're a 
                seasoned connoisseur or just beginning your tea journey, we invite you to explore 
                our collection and discover your perfect blend.
              </p>
              <p>
                Our commitment to sustainability and ethical sourcing means that every purchase 
                supports fair trade practices and environmental conservation. Join us in celebrating 
                the art of tea, one cup at a time.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="Yvonne.webp"
              alt="Our Story"
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
