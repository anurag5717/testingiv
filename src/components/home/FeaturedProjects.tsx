import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventConcert from "@/assets/event-concert.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventExpo from "@/assets/event-expo.jpg";

const projects = [
  {
    id: 1,
    title: "Tata Corporate Summit 2024",
    category: "Corporate Events",
    image: eventCorporate,
    size: "large",
  },
  {
    id: 2,
    title: "Monsoon Music Festival",
    category: "Live Concerts",
    image: eventConcert,
    size: "medium",
  },
  {
    id: 3,
    title: "Royal Rajput Wedding",
    category: "Weddings",
    image: eventWedding,
    size: "medium",
  },
  {
    id: 4,
    title: "India Tech Expo 2024",
    category: "Trade Fairs",
    image: eventExpo,
    size: "large",
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Our Work
            </span>
            <h2 className="heading-lg mt-4">
              Featured Projects
            </h2>
          </div>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.size === "large" ? "md:row-span-1" : ""
              }`}
            >
              <Link to="/portfolio" className="block aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-orange-light text-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white mt-2 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
