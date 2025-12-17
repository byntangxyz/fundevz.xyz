import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description:
    "Read the latest articles and blog posts by Bintang Murtifandy on fullstack development, DevOps, networking, and IoT.",
  keywords:
    "Blog, Articles, Web Development, DevOps, IoT, Technology, Programming",
  openGraph: {
    title: "Blog & Articles - Bintang Murtifandy",
    description:
      "Read the latest articles and tutorials on web development, DevOps, and technology.",
    type: "website",
    url: "https://fundevz.xyz/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Articles - Bintang Murtifandy",
    description:
      "Read the latest articles and tutorials on web development, DevOps, and technology.",
  },
  alternates: {
    canonical: "https://fundevz.xyz/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // JSON-LD structured data for blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bintang Murtifandy's Blog",
    description:
      "Articles and tutorials on web development, DevOps, networking, and IoT",
    url: "https://fundevz.xyz/blog",
    author: {
      "@type": "Person",
      name: "Bintang Murtifandy",
      url: "https://fundevz.xyz",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://fundevz.xyz/blog/${post.slug}`,
      keywords: post.tags?.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <ShinyText text="Blog & Articles" disabled={false} speed={3} />
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, DevOps, and
            technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full p-6 rounded-2xl border border-border bg-secondary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm font-medium text-primary">
                  <span className="mr-2">Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl font-semibold mb-2">No posts yet</p>
            <p className="text-muted-foreground">
              Check back soon for new content!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
