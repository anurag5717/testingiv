import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Target, Eye, MapPin, Award, Users, Building } from "lucide-react";
const team = [{
  name: "Pranati Das",
  position: "Director",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
}, {
  name: "Bidyaraj Jena",
  position: "Director",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
}, {
  name: "Ranjit Kumar Das",
  position: "Managing Director",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
}];
const About = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const isHeroInView = useInView(heroRef, {
    once: true
  });
  const isVisionInView = useInView(visionRef, {
    once: true,
    margin: "-100px"
  });
  const isTeamInView = useInView(teamRef, {
    once: true,
    margin: "-100px"
  });
  return <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle" ref={heroRef}>
        <div className="container-wide mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isHeroInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="max-w-4xl">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              About Us
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              We Are <span className="text-gradient">Impavid Venture</span>
            </h1>
            <p className="body-lg text-muted-foreground">For over 9 years, we've been India's trusted partner for exceptional events. From corporate conferences to grand weddings, government ceremonies to live concerts, we transform visions into extraordinary experiences.</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background" ref={visionRef}>
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={isVisionInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6
          }} className="p-8 md:p-12 bg-secondary/50 rounded-2xl">
              <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-md mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and innovative event management company, 
                setting global standards in creativity, execution, and client satisfaction. 
                We envision a future where every event we touch becomes a benchmark for excellence.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={isVisionInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="p-8 md:p-12 bg-secondary/50 rounded-2xl">
              <div className="w-16 h-16 rounded-xl bg-gradient-brand flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver flawless, memorable events that exceed expectations through 
                meticulous planning, creative innovation, and unwavering commitment to our clients. 
                We measure success by the smiles we create and the memories we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats & Credibility */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            icon: Award,
            value: "500+",
            label: "Successful Events"
          }, {
            icon: Users,
            value: "100+",
            label: "Corporate Clients"
          }, {
            icon: MapPin,
            value: "50+",
            label: "Cities Covered"
          }, {
            icon: Building,
            value: "9+",
            label: "Years Experience"
          }].map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-light" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-background" ref={teamRef}>
        <div className="container-wide mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isTeamInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Leadership
            </span>
            <h2 className="heading-lg mt-4 mb-6">Meet Our Team</h2>
            <p className="body-lg text-muted-foreground">
              Passionate professionals dedicated to making your events extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => <motion.div key={member.name} initial={{
            opacity: 0,
            y: 30
          }} animate={isTeamInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                </div>
                <h3 className="font-display text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.position}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          }}>
              <span className="text-primary text-sm uppercase tracking-widest font-medium">
                Our Reach
              </span>
              <h2 className="heading-lg mt-4 mb-6">Pan-India Presence</h2>
              <p className="body-lg text-muted-foreground mb-8">
                With headquarters in Bhubaneswar and a strong network across India, 
                we deliver exceptional events in every corner of the country.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Metro Presence</h4>
                    <p className="text-muted-foreground">Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad</p>
                  </div>
                </div>
              </div>
            </motion.div>

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
          }} className="grid grid-cols-3 gap-4">
              {["Odisha", "Delhi NCR", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Telangana", "Gujarat", "Rajasthan"].map(state => <div key={state} className="p-4 bg-background rounded-lg text-center border border-border hover:border-primary/30 transition-colors">
                  <span className="text-sm font-medium">{state}</span>
                </div>)}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;
