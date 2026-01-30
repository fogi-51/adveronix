import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Adveronix Agency"
        description="Read the terms and conditions for using Adveronix Agency's digital marketing services. Understand your rights and obligations."
        keywords="terms of service, terms and conditions, Adveronix terms, service agreement"
        canonicalUrl="https://adveronix.com/terms"
      />
      <Layout>
        <section className="py-20">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using Adveronix Agency's website and services, you agree to be bound 
                    by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">2. Services</h2>
                  <p className="text-muted-foreground">
                    Adveronix Agency provides digital marketing services including but not limited to 
                    Facebook Ads, Google Ads, SEO, social media marketing, and lead generation. The 
                    specific services and deliverables will be outlined in individual service agreements 
                    or proposals provided to clients.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">3. Client Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Grant necessary access to advertising accounts and platforms</li>
                    <li>Respond to communications and approve materials in a timely manner</li>
                    <li>Comply with all applicable laws and platform policies</li>
                    <li>Pay for services as agreed upon in the service agreement</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">4. Payment Terms</h2>
                  <p className="text-muted-foreground">
                    Payment terms will be specified in individual service agreements. Unless otherwise 
                    stated, invoices are due within 15 days of receipt. Late payments may incur additional 
                    fees and may result in suspension of services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, strategies, and materials created by Adveronix Agency remain our 
                    intellectual property until full payment is received. Upon full payment, clients 
                    receive a license to use the deliverables for their intended purpose. We retain 
                    the right to showcase work in our portfolio unless otherwise agreed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">6. Confidentiality</h2>
                  <p className="text-muted-foreground">
                    Both parties agree to maintain the confidentiality of proprietary information 
                    shared during the course of the engagement. This includes business strategies, 
                    performance data, and trade secrets.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Adveronix Agency shall not be liable for any indirect, incidental, special, or 
                    consequential damages arising out of or related to our services. Our total liability 
                    shall not exceed the fees paid by the client for the services in question. We do not 
                    guarantee specific results from marketing campaigns as outcomes depend on many factors 
                    beyond our control.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">8. Termination</h2>
                  <p className="text-muted-foreground">
                    Either party may terminate services with 30 days written notice. Upon termination, 
                    the client is responsible for payment of all services rendered up to the termination 
                    date. We will provide all client-owned materials and access credentials upon request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">9. Modifications</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms of Service at any time. Changes will be 
                    effective immediately upon posting to our website. Continued use of our services 
                    after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">10. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service shall be governed by and construed in accordance with the 
                    laws of India. Any disputes arising from these terms shall be resolved in the 
                    courts of Kolkata, West Bengal.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions about these Terms of Service, please contact us at:<br />
                    Email: <a href="mailto:info@supabased.site" className="text-primary hover:underline">info@supabased.site</a><br />
                    Phone: <a href="tel:+916290403092" className="text-primary hover:underline">+91 6290403092</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
