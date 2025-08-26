const testimonials = [
  {
    quote: "Proofolio made it incredibly easy to verify my credentials. Employers now trust my resume instantly, and I've landed more interviews than ever before.",
    name: "Sarah Chen",
    title: "Software Engineer",
    company: "TechCorp"
  },
  {
    quote: "As an HR manager, Proofolio has revolutionized our hiring process. We can now verify candidate credentials in seconds, not weeks.",
    name: "Michael Rodriguez", 
    title: "HR Director",
    company: "Global Industries"
  },
  {
    quote: "The blockchain verification gives me confidence that my achievements are permanently secure and instantly verifiable by any employer.",
    name: "Emily Johnson",
    title: "Data Scientist", 
    company: "AI Innovations"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who trust Proofolio to verify and showcase their achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;