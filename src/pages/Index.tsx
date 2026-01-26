import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { SEOHead, organizationSchema } from "@/components/seo/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Adveronix Agency | Results-Driven Digital Marketing Agency"
        description="Scale your business with data-driven digital marketing. Expert Facebook Ads, Google Ads, SEO & lead generation services. 500+ clients served. Book a free strategy call today!"
        keywords="digital marketing agency, Facebook Ads agency, Google Ads, SEO services, lead generation, performance marketing, social media marketing"
        canonicalUrl="https://adveronix.com"
        structuredData={organizationSchema}
      />
      <Layout>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
