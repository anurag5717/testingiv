import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building, FileText } from "lucide-react";
const eventTypes = ["Corporate Event", "Government Event", "Live Concert", "Trade Fair / Expo", "Wedding", "Experiential Marketing", "Digital Campaign", "Other"];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    eventType: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours."
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      eventType: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-wide mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Contact Us
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              Let's Create Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="body-lg text-muted-foreground">
              Ready to discuss your next event? Fill out the form below or reach out 
              directly. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-md mb-6">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have a question or ready to start planning your event? 
                  We're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:+918249756770" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-brand transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 8249756770 </p>
                    <p className="text-muted-foreground">+91 9827901985</p>
                  </div>
                </a>

                <a href="https://wa.me/918249756770" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">Chat with us instantly</p>
                  </div>
                </a>

                <a href="mailto:info@impavidventure.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-brand transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@impavidventure.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-muted-foreground">A31 BJB Nagar, Bhbubaneswar-14<br />
                      Bhubaneswar, Odisha 751007
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      24/7 for urgent event support
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="p-6 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Company Details</h4>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">GST:</span> 21XXXXX1234X1Z5</p>
                  <p><span className="font-medium text-foreground">CIN:</span> U74999OR2020PTC012345</p>
                  <p><span className="font-medium text-foreground">PAN:</span> AAACI1234X</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="lg:col-span-3">
              <div className="bg-secondary/30 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-display font-semibold">Enquiry Form</h3>
                </div>

              <form name="contact" method="POST" data-netlify="true" action="/success" className="space-y-6">
  <input type="hidden" name="form-name" value="contact" />


                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="h-12" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 9XXX XXXXX" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="h-12" />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" required className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                      Event Type *
                    </label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="w-full h-12 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select event type</option>
                      {eventTypes.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your event
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Share details about your event - date, venue, expected guests, budget range, specific requirements..." rows={5} className="resize-none" />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : <>
                        Submit Enquiry
                        <Send className="w-5 h-5 ml-2" />
                      </>}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting, you agree to our privacy policy. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.5!2d85.847063!3d20.256663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzI0LjAiTiA4NcKwNTAnNDkuNCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" width="100%" height="100%" style={{
        border: 0
      }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Impavid Venture Office Location" />
        <div className="absolute top-6 left-6 bg-background rounded-xl p-6 shadow-lg max-w-xs">
          <h4 className="font-display font-semibold mb-2">Visit Our Office</h4>
          <p className="text-sm text-muted-foreground">A31 BJB Nagar   <br />
            Bhubaneswar, Odisha 751014
          </p>
        </div>
      </section>
    </Layout>;
};
export default Contact;