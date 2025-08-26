import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "1 verified document",
      "Basic profile page",
      "Email support",
      "Standard verification"
    ],
    popular: false
  },
  {
    name: "Pro", 
    price: "$9",
    period: "per month",
    description: "Best for professionals",
    features: [
      "Unlimited verified documents",
      "Custom profile design", 
      "Priority support",
      "Advanced verification",
      "Analytics dashboard",
      "PDF export"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per month", 
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Bulk verification",
      "API access",
      "White-label solution",
      "24/7 dedicated support"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your verification needs. 
            All plans include our core blockchain verification technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-background rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary transform lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl' 
                    : 'bg-secondary hover:bg-accent text-foreground'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;