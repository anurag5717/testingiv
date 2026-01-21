import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Landmark, 
  Music, 
  Store, 
  Sparkles, 
  Heart,
  Monitor,
  Film,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Conferences, product launches, annual meets, and corporate galas executed with precision.",
  },
  {
    icon: Landmark,
    title: "Government Events",
    description: "State-level programs, inaugurations, and public ceremonies with protocol expertise.",
  },
  {
    icon: Music,
    title: "Live Concerts",
    description: "Large-scale concerts and music festivals with world-class production quality.",
  },
  {
    icon: Store,
    title: "Trade Fairs & Expos",
    description: "Exhibition management, booth design, and B2B event coordination.",
  },
  {
    icon: Sparkles,
    title: "Experiential Marketing",
    description: "Brand activations and immersive experiences that create lasting impressions.",
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Luxury destination weddings and traditional ceremonies crafted to perfection.",
  },
  {
    icon: Monitor,
    title: "Digital Marketing",
    description: "Integrated digital campaigns, social media management, and online presence.",
  },
  {
    icon: Film,
    title: "Ad Films",
    description: "Commercial video production, brand films, and corporate documentaries.",
  },
];

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            What We Do
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            Comprehensive Event Solutions
          </h2>
          <p className="body-lg text-muted-foreground">
            From intimate corporate gatherings to massive public spectacles, we deliver 
            end-to-end event management with uncompromising attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/services"
                className="group block p-8 bg-secondary/50 rounded-xl hover:bg-secondary transition-all duration-300 hover-lift h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
