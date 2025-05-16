
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roboblack via-roboblack/90 to-roboblue/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="AI Automation"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            AI Agents to Make You Over <span className="text-blue-400">$100K</span> Per Year
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transform your business with our cutting-edge AI automation solutions, designed to boost efficiency, increase revenue, and streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-roboblue hover:bg-roboblue-light text-white text-lg py-6 px-8">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-black bg-white hover:bg-transparent hover:text-white transition-colors text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
