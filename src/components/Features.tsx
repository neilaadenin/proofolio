import { Shield, Upload, Briefcase, Share2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Verification",
    description: "Blockchain technology ensures your credentials are tamper-proof and permanently verified."
  },
  {
    icon: Upload,
    title: "Easy Uploads",
    description: "Simple drag-and-drop interface to upload certificates, transcripts, and work samples."
  },
  {
    icon: Briefcase,
    title: "Trusted by Companies",
    description: "Leading employers trust our verification system for reliable candidate assessment."
  },
  {
    icon: Share2,
    title: "Shareable Resume",
    description: "Generate a unique profile link that showcases your verified achievements instantly."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Proofolio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of resume verification with our blockchain-powered platform 
            that builds trust between candidates and employers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;