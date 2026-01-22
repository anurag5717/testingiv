import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Users, Shield, Truck, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Pan-India Presence",
    description: "Execute events seamlessly across 50+ cities with our nationwide network of vendors and partners.",
  },
  {
    icon: Landmark,
    title: "Government Expertise",
    description: "Trusted by state and central government bodies for high-protocol events and public programs.",
  },
  {
    icon: Users,
    title: "Large-Scale Production",
    description: "Capability to manage events from 50 to 50,000+ attendees with consistent quality.",
  },
  {
    icon: Shield,
    title: "Trusted Vendor Network",
    description: "Curated partnerships with verified vendors ensuring quality at every touchpoint.",
  },
  {
    icon: Award,
    title: "9+ Years Experience",
    description: "Proven track record with 500+ successful events and 100+ corporate clients.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Rigorous project management ensuring every event is delivered on schedule, every time.",
  },
];

import { Landmark } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Why Impavid
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              Your Vision, Our Expertise, <span className="text-gradient">Flawless Execution</span>
            </h2>
            <p className="body-lg text-muted-foreground mb-8">
              We don't just manage events—we craft experiences that resonate. With over 15 years 
              of industry expertise and a commitment to excellence, we transform your boldest 
              ideas into extraordinary realities.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-secondary/50 rounded-2xl">
              {[
                { value: "99%", label: "Client Satisfaction" },
                { value: "500+", label: "Events Completed" },
                { value: "₹10Cr+", label: "Events Managed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-brand group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
