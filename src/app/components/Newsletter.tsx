import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 px-6 bg-purple-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <Mail className="w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-4xl font-semibold mb-4">Join Our Tea Community</h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to our newsletter and get exclusive offers, tea brewing tips, and new product updates
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 bg-white text-gray-900 border-none rounded-full px-6 py-6"
          />
          <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-6 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
