
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-roboblue to-roboblack py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI Automation?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the hundreds of businesses already leveraging our AI solutions to increase efficiency, 
            reduce costs, and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-roboblack hover:bg-gray-100 text-lg py-6 px-8">
              Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-black bg-white hover:bg-transparent hover:text-white transition-colors text-lg py-6 px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
