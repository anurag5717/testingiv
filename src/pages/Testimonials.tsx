import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Impavid exceeded our expectations in every way. Their attention to detail and seamless execution made our annual conference a resounding success. The team handled everything from venue selection to post-event analytics with utmost professionalism.",
    author: "Rajesh Sharma",
    position: "Director of Corporate Communications",
    company: "Tata Motors",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Impavid on our state government event was exceptional. Their understanding of protocol, security requirements, and professionalism is unmatched. They managed a complex event with multiple dignitaries flawlessly.",
    author: "Dr. Priya Patel",
    position: "Additional Secretary",
    company: "Government of Odisha",
    rating: 5,
  },
  {
    id: 3,
    quote: "From concept to execution, the team delivered a world-class music festival. Their production quality rivals international standards. The sound, lighting, and stage design were absolutely spectacular.",
    author: "Vikram Singh",
    position: "Managing Director",
    company: "Soundwave Entertainment",
    rating: 5,
  },
  {
    id: 4,
    quote: "Our destination wedding was nothing short of magical. Every detail was perfectly orchestrated, from the traditional ceremonies to the grand reception. Impavid created memories we'll cherish forever.",
    author: "Ananya & Rohan Mehta",
    position: "Wedding Clients",
    company: "Udaipur Destination Wedding",
    rating: 5,
  },
  {
    id: 5,
    quote: "The exhibition they organized for us attracted over 15,000 visitors. Their booth design, logistics management, and on-ground coordination were exemplary. A truly professional team.",
    author: "Suresh Agarwal",
    position: "VP Marketing",
    company: "Hero MotoCorp",
    rating: 5,
  },
  {
    id: 6,
    quote: "Impavid transformed our product launch into an unforgettable brand experience. The creativity, execution, and attention to detail were outstanding. Highly recommended for corporate events.",
    author: "Meera Krishnan",
    position: "Brand Director",
    company: "Samsung India",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => setCurrent((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleTestimonials = testimonials.slice(
    current * itemsPerPage,
    (current + 1) * itemsPerPage
  );

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
              Testimonials
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              Don't just take our word for it. Here's what our valued clients 
              have to say about their experience working with Impavid Venture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-wide mx-auto">
          <div className="relative max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
            
            <motion.div
              key={testimonials[0].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-2xl md:text-3xl font-display leading-relaxed mb-10">
                "{testimonials[0].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-light text-orange-light" />
                ))}
              </div>
              
              <div className="text-lg font-semibold">{testimonials[0].author}</div>
              <div className="text-white/60 text-sm mt-1">{testimonials[0].position}</div>
              <div className="text-orange-light text-sm font-medium mt-1">{testimonials[0].company}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg">More Success Stories</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                  ))}
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.position}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99%", label: "Client Satisfaction" },
              { value: "500+", label: "Happy Clients" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "95%", label: "Repeat Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
