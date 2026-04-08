export function OurStory() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
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
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
