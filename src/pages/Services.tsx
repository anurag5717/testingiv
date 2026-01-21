import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Landmark, Music, Store, Sparkles, Heart, Monitor, Film } from "lucide-react";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventConcert from "@/assets/event-concert.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventExpo from "@/assets/event-expo.jpg";

const services = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "From intimate board meetings to large-scale annual conferences, we deliver corporate events that reinforce your brand identity and engage your stakeholders.",
    features: ["Annual General Meetings", "Product Launches", "Conferences & Seminars", "Team Building Events", "Award Ceremonies", "Corporate Galas"],
    image: eventCorporate,
  },
  {
    icon: Landmark,
    title: "Government Events",
    description: "Trusted by state and central government bodies for high-protocol events requiring precision, security coordination, and flawless execution.",
    features: ["State Functions", "Inaugurations", "Public Programs", "International Summits", "Cultural Festivals", "Official Ceremonies"],
    image: eventExpo,
  },
  {
    icon: Music,
    title: "Live Concerts",
    description: "World-class production quality for live music events, from intimate performances to stadium concerts with audiences of 50,000+.",
    features: ["Music Festivals", "Artist Tours", "Cultural Concerts", "Sound & Lighting", "Stage Production", "Crowd Management"],
    image: eventConcert,
  },
  {
    icon: Store,
    title: "Trade Fairs & Expos",
    description: "Complete exhibition management including booth design, logistics coordination, and B2B networking facilitation.",
    features: ["Exhibition Design", "Booth Construction", "Vendor Coordination", "B2B Networking", "Product Displays", "Event Marketing"],
    image: eventExpo,
  },
  {
    icon: Sparkles,
    title: "Experiential Marketing",
    description: "Create immersive brand experiences that forge emotional connections with your audience and drive measurable results.",
    features: ["Brand Activations", "Pop-up Events", "Roadshows", "Mall Activations", "Interactive Experiences", "Guerrilla Marketing"],
    image: eventCorporate,
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Luxury destination weddings and traditional ceremonies crafted with attention to every detail, making your special day truly unforgettable.",
    features: ["Destination Weddings", "Traditional Ceremonies", "Reception Planning", "Décor Design", "Vendor Management", "Guest Coordination"],
    image: eventWedding,
  },
  {
    icon: Monitor,
    title: "Digital Marketing",
    description: "Integrated digital campaigns that amplify your event's reach and create lasting engagement across all platforms.",
    features: ["Social Media Campaigns", "Influencer Marketing", "Content Creation", "Live Streaming", "Email Marketing", "Analytics & Reporting"],
    image: eventCorporate,
  },
  {
    icon: Film,
    title: "Ad Films & Production",
    description: "Professional video production services from concept development to post-production, creating compelling visual content.",
    features: ["Commercial Production", "Corporate Films", "Event Documentation", "Brand Films", "Testimonial Videos", "Aerial Videography"],
    image: eventConcert,
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle" ref={heroRef}>
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Our Services
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              Comprehensive <span className="text-gradient">Event Solutions</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              From concept to execution, we offer end-to-end event management services 
              tailored to your unique requirements and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="body-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="hero">
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-brand">
        <div className="container-wide mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">
            Don't See What You Need?
          </h2>
          <p className="body-lg text-white/80 mb-10 max-w-2xl mx-auto">
            We offer customized solutions for unique event requirements. 
            Contact us to discuss your specific needs.
          </p>
          <Button asChild variant="premium" size="xl" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
