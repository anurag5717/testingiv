import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ClientLogos />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTASection />
    </Layout>
  );
};

export default Index;
