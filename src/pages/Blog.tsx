import { Layout } from "@/components/layout/Layout";
import { SEOHead, blogSchema } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const featuredPost = {
  id: 1,
  title: "The Complete Guide to Facebook Ads in 2024: Strategies That Actually Convert",
  excerpt:
    "Discover the latest Facebook advertising strategies that are driving real results for businesses. From audience targeting to creative best practices, this guide covers everything you need to know.",
  category: "Facebook Ads",
  author: "Manish Singh",
  date: "January 15, 2024",
  readTime: "12 min read",
  image: null,
};

const blogPosts = [
  {
    id: 2,
    title: "How to Scale Your Google Ads Campaigns Without Killing ROI",
    excerpt:
      "Learn the proven methods for scaling your PPC campaigns while maintaining profitability. Includes real examples and step-by-step processes.",
    category: "Google Ads",
    author: "Sara Ross",
    date: "January 12, 2024",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "SEO for Small Business: A Practical Guide to Ranking Higher",
    excerpt:
      "No massive budget? No problem. This guide shows small businesses how to compete in organic search with strategic, high-impact tactics.",
    category: "SEO",
    author: "Vishal Singh",
    date: "January 10, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Psychology of High-Converting Landing Pages",
    excerpt:
      "Understand the psychological principles that make visitors take action. Includes design patterns and copy frameworks that work.",
    category: "Conversion",
    author: "Mirjahan Ali",
    date: "January 8, 2024",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Instagram Reels for Business: Creating Content That Gets Seen",
    excerpt:
      "Master the art of short-form video content on Instagram. Tips for planning, creating, and optimizing Reels for maximum reach.",
    category: "Social Media",
    author: "Manish Singh",
    date: "January 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Email Marketing Automation: Workflows That Drive Revenue",
    excerpt:
      "Build email sequences that nurture leads and drive repeat purchases. Real examples from successful e-commerce and B2B brands.",
    category: "Email Marketing",
    author: "Jennifer Mills",
    date: "January 3, 2024",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Measuring Marketing ROI: A Framework for Attribution",
    excerpt:
      "Stop guessing which channels are working. Learn how to build an attribution model that gives you real insights into marketing performance.",
    category: "Analytics",
    author: "Michael Ross",
    date: "December 28, 2023",
    readTime: "11 min read",
  },
];

const categories = [
  "All Posts",
  "Facebook Ads",
  "Google Ads",
  "SEO",
  "Social Media",
  "Email Marketing",
  "Conversion",
  "Analytics",
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Digital Marketing Blog | Insights & Strategies | Foggy IO"
        description="Expert digital marketing insights, guides, and strategies. Learn about Facebook Ads, Google Ads, SEO, social media marketing, and more from the Foggy IO team."
        keywords="digital marketing blog, marketing tips, Facebook Ads guide, SEO tips, social media strategies, PPC insights"
        canonicalUrl="https://adveronix.lovable.app/blog"
        structuredData={blogSchema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Blog & Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Marketing Insights That{" "}
                <span className="text-gradient">Drive Growth</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Expert guides, strategies, and industry insights from our team 
                of digital marketing professionals.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-12 h-14 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-card border-b border-border sticky top-20 z-40">
          <div className="container-wide">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-6xl">📊</span>
                    <p className="mt-4 text-muted-foreground">Featured Article</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button variant="accent" className="w-fit">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden card-hover group"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📝</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-secondary/50">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get Marketing Insights Weekly
              </h2>
              <p className="text-muted-foreground mb-8">
                Join 10,000+ marketers getting our best tips and strategies 
                delivered straight to their inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="accent">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
