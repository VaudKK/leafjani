import { Leaf, Heart, ShoppingCart, Truck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Leaf,
    title: "100% Organic",
    description: "All our teas are certified organic",
  },
  {
    id: 2,
    icon: Heart,
    title: "Fresh & Healty",
    description: "Freshly packed for maximum flavor",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Order Easily",
    description: "Simple and secure checkout",
  },
  {
    id: 4,
    icon: Truck,
    title: "Express Fast Delivery",
    description: "Quick delivery to your doorstep",
  },
];

export function Features() {
  return (
    <section className="py-16 px-6 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
