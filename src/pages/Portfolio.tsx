import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventConcert from "@/assets/event-concert.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventExpo from "@/assets/event-expo.jpg";
import heroImage from "@/assets/hero-event.jpg";

const categories = ["All", "Corporate", "Government", "Concerts", "Weddings", "Exhibitions"];

const projects = [
  { id: 1, title: "Tata Annual Summit 2024", category: "Corporate", image: eventCorporate, description: "3-day conference for 2000+ executives" },
  { id: 2, title: "Monsoon Music Festival", category: "Concerts", image: eventConcert, description: "50,000+ attendees, 20 artists" },
  { id: 3, title: "Royal Destination Wedding", category: "Weddings", image: eventWedding, description: "Luxury wedding in Udaipur" },
  { id: 4, title: "India Tech Expo 2024", category: "Exhibitions", image: eventExpo, description: "200+ exhibitors, 15,000 visitors" },
  { id: 5, title: "State Cultural Festival", category: "Government", image: heroImage, description: "Week-long cultural celebration" },
  { id: 6, title: "Samsung Product Launch", category: "Corporate", image: eventCorporate, description: "National launch event in Delhi" },
  { id: 7, title: "Sunburn Festival Odisha", category: "Concerts", image: eventConcert, description: "Electronic music festival" },
  { id: 8, title: "Traditional Bengali Wedding", category: "Weddings", image: eventWedding, description: "Grand celebration in Kolkata" },
  { id: 9, title: "Auto Expo 2024", category: "Exhibitions", image: eventExpo, description: "Major automotive exhibition" },
  { id: 10, title: "Chief Minister's Summit", category: "Government", image: heroImage, description: "High-protocol government event" },
  { id: 11, title: "JSW Leadership Meet", category: "Corporate", image: eventCorporate, description: "Executive leadership conclave" },
  { id: 12, title: "Odissi Dance Festival", category: "Concerts", image: eventConcert, description: "Classical dance celebration" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Our Work
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              Portfolio of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              Explore our collection of successful events across various categories, 
              each representing our commitment to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-brand text-white shadow-lg"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-orange-light text-sm uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-xl"
            />
            <div className="mt-6 text-center">
              <span className="text-orange-light text-sm uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-white mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/70 mt-2">{selectedProject.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Portfolio;
