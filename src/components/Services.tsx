
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Sales Automation",
    description: "Automate your sales processes with our AI-powered solutions",
    features: ["Lead generation automation", "Proposal generator"],
    icon: "💹"
  },
  {
    title: "AI Voice Agents",
    description: "Intelligent voice agents that handle customer interactions",
    features: ["Appointment setter", "Database reactivation", "Reminders and followups"],
    icon: "🎙️"
  },
  {
    title: "Chatbots Automation",
    description: "Smart chatbots that engage with your customers and prospects",
    features: ["Website inbound & outbound automations", "Social media inbound & outbound automations"],
    icon: "💬"
  },
  {
    title: "Social Media Automation",
    description: "Automate your social media presence and engagement",
    features: ["LinkedIn automation", "Instagram automation", "Facebook automation", "YouTube automation"],
    icon: "📱"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-roboblack to-roboblue py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Powerful AI-driven automation solutions to streamline your business operations and drive revenue growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-lg border-gray-700/30 text-white hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
