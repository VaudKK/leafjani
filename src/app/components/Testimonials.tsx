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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-3">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it - here's what our customers have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 shadow-lg border-none">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
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
