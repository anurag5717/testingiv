import { motion } from "framer-motion";

const clients = [
  "Hero", "Tata", "Samsung", "LG", "Nestle", "Dabur", 
  "JSW", "Titan", "Adani", "Reliance", "HDFC", "ICICI",
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border overflow-hidden">
      <div className="container-wide mx-auto px-4 md:px-8">
        <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-widest">
          Trusted by India's Leading Brands
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="h-12 flex items-center justify-center min-w-[100px]">
                <span className="text-xl md:text-2xl font-display font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="h-12 flex items-center justify-center min-w-[100px]">
                <span className="text-xl md:text-2xl font-display font-bold text-muted-foreground/50 hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
