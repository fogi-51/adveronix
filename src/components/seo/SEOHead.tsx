import { useEffect } from "react";

const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/5GoBW90ZZOfCH10SYedLVXJaT1s1/social-images/social-1769411693847-ChatGPT_Image_Jan_25__2026__11_51_42_PM__1_-removebg-preview.png";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);

    // Open Graph tags
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    if (canonicalUrl) updateMeta("og:url", canonicalUrl, true);

    // Twitter Card tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    if (ogImage) updateMeta("twitter:image", ogImage);
    if (canonicalUrl) updateMeta("twitter:url", canonicalUrl);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    // Structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
}

// Organization Schema for the agency
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foggy IO Agency",
  description: "Results-driven digital marketing agency specializing in Facebook Ads, Google Ads, SEO, and performance marketing.",
  url: "https://adveronix.lovable.app",
  logo: "https://adveronix.lovable.app/logo.png",
  sameAs: [
    "https://facebook.com/adveronix",
    "https://instagram.com/adveronix",
    "https://linkedin.com/company/adveronix",
    "https://twitter.com/adveronix",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6290403092",
    contactType: "customer service",
    email: "info@fogi.co.in",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Foggy IO Agency",
  description: "Digital marketing agency providing Facebook Ads, Google Ads, SEO, and lead generation services.",
  url: "https://adveronix.lovable.app",
  telephone: "+91-6290403092",
  email: "info@fogi.co.in",
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

// Blog listing schema
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Foggy IO Digital Marketing Blog",
  description: "Expert insights, guides, and strategies on Facebook Ads, Google Ads, SEO, and social media marketing.",
  url: "https://adveronix.lovable.app/blog",
  publisher: {
    "@type": "Organization",
    name: "Foggy IO Agency",
    url: "https://adveronix.lovable.app",
  },
};
