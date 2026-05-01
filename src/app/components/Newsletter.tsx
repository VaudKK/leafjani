import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section id="contact" className="scroll-mt-24 bg-purple-600 px-4 py-14 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 sm:h-16 sm:w-16">
            <Mail className="w-8 h-8" />
          </div>
        </div>
        
        <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Join Our Tea Community</h2>
        <p className="mb-8 text-sm opacity-90 sm:text-lg">
          Subscribe to our newsletter and get exclusive offers, tea brewing tips, and new product updates
        </p>
        
        <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="h-11 flex-1 rounded-full border-none bg-white px-5 text-sm text-gray-900 sm:h-12 sm:px-6 sm:text-base"
          />
          <Button className="h-11 rounded-full bg-white px-6 text-sm font-semibold text-purple-600 hover:bg-gray-100 sm:h-12 sm:px-8 sm:text-base">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
