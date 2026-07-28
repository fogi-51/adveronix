import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Adveronix Agency"
        description="Learn how Adveronix Agency collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        keywords="privacy policy, data protection, Adveronix privacy, personal information"
        canonicalUrl="https://adveronix.lovable.app/privacy"
      />
      <Layout>
        <section className="py-20">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground">
                    Adveronix Agency ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                    information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">We may collect information about you in various ways:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and business information you provide when contacting us or using our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Improve, personalize, and expand our services</li>
                    <li>Communicate with you about updates, marketing, and promotional offers</li>
                    <li>Process transactions and send related information</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze usage trends and preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share information with 
                    trusted service providers who assist us in operating our website and conducting our 
                    business, provided they agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, or 
                    destruction. However, no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">7. Third-Party Links</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites. We are not responsible for 
                    the privacy practices or content of these external sites. We encourage you to read 
                    the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">8. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold font-display mb-4">9. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:<br />
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

export default Privacy;
