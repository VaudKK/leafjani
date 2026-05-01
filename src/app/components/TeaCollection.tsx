import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const teas = [
  {
    id: 1,
    name: "Purple Tea",
    description:
      "A vibrant and smooth loose leaf tea with a delicate aroma and a bright, refreshing finish.",
    price: "12.99",
    image: "PurpleAuNaturale.webp",
    bgColor: "bg-purple-900",
  },
  {
    id: 2,
    name: "Black Tea",
    description:
      "A full-bodied loose leaf black tea with bold character, rich color, and a classic brisk taste.",
    price: "10.99",
    image: "AberdaresGold.webp",
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    name: "Yellow Tea",
    description:
      "A rare and mellow loose leaf tea with soft floral notes and an elegant, silky cup.",
    price: "14.99",
    image: "GoldenYellow.webp",
    bgColor: "bg-yellow-600",
  },
];

export function TeaCollection() {
  const [selectedTea, setSelectedTea] = useState<(typeof teas)[number] | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedTea(null);
      setQuantity(1);
    }
  };

  const openTeaDialog = (tea: (typeof teas)[number]) => {
    setSelectedTea(tea);
    setQuantity(1);
  };

  return (
    <section id="teas" className="bg-gray-50 px-6 py-16 scroll-mt-24">
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
              <div className={`${tea.bgColor} h-120 flex items-center justify-center`}>
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="h-full w-full object-cover shadow-md"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{tea.name}</h3>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold">${tea.price}</span>
                  <Button
                    type="button"
                    onClick={() => openTeaDialog(tea)}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={selectedTea !== null} onOpenChange={handleOpenChange}>
          {selectedTea ? (
            <DialogContent className="overflow-hidden border-none p-0 shadow-2xl sm:max-w-4xl">
              <div className="grid bg-white md:grid-cols-[1.05fr_0.95fr]">
                <div className={`${selectedTea.bgColor} flex min-h-[320px] items-center justify-center p-6 md:min-h-[520px] md:p-10`}>
                  <img
                    src={selectedTea.image}
                    alt={selectedTea.name}
                    className="h-full max-h-[440px] w-full max-w-sm rounded-[2rem] object-cover shadow-2xl"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-3xl font-semibold text-gray-900">
                      {selectedTea.name}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-7 text-gray-600">
                      {selectedTea.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-8 space-y-4 rounded-[1.75rem] bg-purple-50 p-6">
                    <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Price
                      </span>
                      <span className="text-2xl font-semibold text-purple-700">
                        ${selectedTea.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Style
                      </span>
                      <span className="font-medium text-gray-900">Loose Leaf</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Weight
                      </span>
                      <span className="font-medium text-gray-900">2.5oz</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 rounded-[1.75rem] border border-gray-200 px-5 py-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                        Quantity
                      </p>
                      <p className="text-sm text-gray-600">Adjust your order amount</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-11 w-11 rounded-full border-gray-300"
                        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="min-w-8 text-center text-xl font-semibold text-gray-900">
                        {quantity}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-11 w-11 rounded-full border-gray-300"
                        onClick={() => setQuantity((current) => current + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="button"
                    className="mt-8 h-12 rounded-full bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </DialogContent>
          ) : null}
        </Dialog>
      </div>
    </section>
  );
}
