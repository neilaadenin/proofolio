import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          {/* Logo and Tagline */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/proofolio-logo.png" 
                alt="Proofolio Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-lg">
              Proofolio - Verified by Blockchain
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 mb-8 lg:mb-0">
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Privacy
            </a>
            <a 
              href="#terms" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Terms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="#linkedin" 
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#twitter" 
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#github" 
              className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>© 2024 Proofolio. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Built with ❤️ for the future of work verification
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;