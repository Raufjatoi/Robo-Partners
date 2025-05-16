
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-roboblack mb-6 heading-underline">About Robo Partners</h2>
            <p className="text-lg text-gray-700 mb-6">
              Robo Partners is a cutting-edge automation company dedicated to transforming businesses through the power of AI. 
              We specialize in creating intelligent automation solutions that help organizations streamline operations, 
              increase revenue, and achieve significant growth.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Originally founded as Crafty Automation, we've evolved into Robo Partners to better reflect our focus on 
              robotic process automation and AI integration. Our team of experts brings years of experience in AI development, 
              business process optimization, and digital transformation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-roboblue mb-2">10+</h3>
                <p className="text-gray-700">Businesses Automated</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-roboblue mb-2">100%</h3>
                <p className="text-gray-700">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-roboblue mb-2">200%</h3>
                <p className="text-gray-700">Average ROI</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-roboblue mb-2">24/7</h3>
                <p className="text-gray-700">Support Available</p>
              </div>
            </div>
            
            <Button className="bg-roboblue hover:bg-roboblue-light text-white">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="AI automation experts" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-roboblue rounded-lg p-6 shadow-xl">
              <p className="text-xl font-bold text-white">
                "Helping businesses achieve over $100K in annual revenue through AI automation"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
