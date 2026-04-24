import { Button } from "./ui/button";
import { Card } from "./ui/card";

const teas = [
  {
    id: 1,
    name: "Purple Tea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "12.99",
    image: "PurpleAuNaturale.webp",
    bgColor: "bg-purple-900",
  },
  {
    id: 2,
    name: "Black Tea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "10.99",
    image: "AberdaresGold.webp",
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    name: "Yellow Tea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "14.99",
    image: "GoldenYellow.webp",
    bgColor: "bg-yellow-600",
  },
];

export function TeaCollection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-3">Our Tea Collection</h2>
          <p className="text-gray-600">
            Explore our carefully curated collection of premium teas from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teas.map((tea) => (
            <Card key={tea.id} className="overflow-hidden border-none shadow-lg">
              <div className={`${tea.bgColor} h-96 flex items-center justify-center`}>
                <img 
                  src={tea.image} 
                  alt={tea.name}
                  className="h-full w-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">${tea.price}</span>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                    Shop Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
