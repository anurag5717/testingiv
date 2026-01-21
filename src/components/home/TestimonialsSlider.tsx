import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Impavid exceeded our expectations in every way. Their attention to detail and seamless execution made our annual conference a resounding success.",
    author: "Rajesh Sharma",
    position: "Director of Corporate Communications",
    company: "Tata Motors",
  },
  {
    id: 2,
    quote: "Working with Impavid on our state government event was exceptional. Their understanding of protocol and professionalism is unmatched.",
    author: "Dr. Priya Patel",
    position: "Additional Secretary",
    company: "Government of Odisha",
  },
  {
    id: 3,
    quote: "From concept to execution, the team delivered a world-class music festival. Their production quality rivals international standards.",
    author: "Vikram Singh",
    position: "Managing Director",
    company: "Soundwave Entertainment",
  },
  {
    id: 4,
    quote: "Our destination wedding was nothing short of magical. Every detail was perfectly orchestrated, creating memories we'll cherish forever.",
    author: "Ananya & Rohan Mehta",
    position: "",
    company: "Wedding Client",
  },
];

const TestimonialsSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-charcoal text-white overflow-hidden" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-light text-sm uppercase tracking-widest font-medium">
            Testimonials
          </span>
          <h2 className="heading-lg mt-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 opacity-20">
            <Quote className="w-24 h-24 text-primary" />
          </div>

          {/* Testimonial Content */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 md:px-12"
          >
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-display leading-relaxed mb-10">
              "{testimonials[current].quote}"
            </blockquote>
            <div>
              <div className="text-lg font-semibold text-white">
                {testimonials[current].author}
              </div>
              {testimonials[current].position && (
                <div className="text-white/60 text-sm mt-1">
                  {testimonials[current].position}
                </div>
              )}
              <div className="text-orange-light text-sm font-medium mt-1">
                {testimonials[current].company}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-primary" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
