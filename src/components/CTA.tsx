import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Start building your verified resume today.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Join thousands of professionals who trust Proofolio to showcase their verified achievements. 
            Get started for free and experience the future of resume verification.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-12 py-4 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;