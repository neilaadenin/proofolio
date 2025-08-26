import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Build and Verify Your Resume with{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Blockchain
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Proofolio helps you upload, verify, and showcase your achievements securely 
                with blockchain technology that employers can trust.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Start Now
              </Button>
              <Button variant="outline" size="lg" className="font-semibold px-8 py-4 transition-all duration-300 hover:shadow-md">
                Learn More
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Blockchain Resume Verification Illustration" 
                className="w-full h-auto rounded-2xl shadow-card-hover"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;