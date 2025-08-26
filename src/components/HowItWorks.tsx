import { FileText, Shield, Share2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Upload your certificate/resume",
    description: "Easily upload your documents, certificates, and achievements to our secure platform."
  },
  {
    step: "02", 
    icon: Shield,
    title: "Blockchain verifies your credentials",
    description: "Our advanced blockchain technology automatically verifies and secures your information."
  },
  {
    step: "03",
    icon: Share2,
    title: "Share your Proofolio profile",
    description: "Get a unique, shareable link that showcases your verified professional profile."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your professional credentials verified in three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary text-2xl font-bold rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:shadow-card transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;