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
    <section className="bg-purple-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center rounded-3xl bg-white/70 px-5 py-6 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 sm:h-16 sm:w-16">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-base font-semibold sm:text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
