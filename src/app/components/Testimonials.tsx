import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The quality of teas from LeafJani is exceptional! Every blend is perfectly crafted and the flavors are authentic. I've tried many tea brands, but this one stands out.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "I'm impressed with both the product quality and customer service. The packaging is beautiful and the tea arrives fresh. Highly recommend to all tea lovers!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    text: "Absolutely love my purple tea! It's unique and delicious. The entire experience from ordering to delivery was seamless. Will definitely order again.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            Don't just take our word for it - here's what our customers have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none p-5 shadow-lg sm:p-6">
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-7 text-gray-700 sm:text-base sm:leading-relaxed">
                {testimonial.text}
              </p>
              <p className="font-semibold text-purple-600">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
