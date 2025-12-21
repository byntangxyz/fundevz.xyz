import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import CopyButton from "@/components/CopyButton";
import Footer from "@/components/Footer";

const components = {
  h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
  p: (props) => (
    <p className="text-base leading-7 mb-4 text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />
  ),
  li: (props) => <li className="text-muted-foreground" {...props} />,
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-secondary/80 px-1.5 py-0.5 rounded text-sm font-mono text-primary border border-border"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => {
    // Extract text content recursively
    const extractText = (node) => {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (node?.props?.children) return extractText(node.props.children);
      return "";
    };

    const codeText = extractText(children);

    return (
      <div className="relative group">
        <CopyButton text={codeText} />
        <pre
          className="bg-[#1e1e1e] p-4 rounded-xl overflow-x-auto mb-6 border border-border/50"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  a: (props) => (
    <a
      className="text-primary hover:underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: (props) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-border" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="px-4 py-2 text-left text-sm font-semibold" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-2 text-sm text-muted-foreground" {...props} />
  ),
  img: ({ src, alt, ...props }) => (
    <span className="block my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
        className="max-w-2xl w-full h-auto rounded-2xl border border-border shadow-lg mx-auto"
        loading="lazy"
        {...props}
      />
      {alt && (
        <span className="block text-center text-sm text-muted-foreground mt-2 italic">
          {alt}
        </span>
      )}
    </span>
  ),
  iframe: ({ src, title, ...props }) => (
    <div
      className="relative w-full my-8 overflow-hidden rounded-xl"
      style={{ paddingBottom: "56.25%" }}
    >
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src={src}
        title={title || "Embedded content"}
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      />
    </div>
  ),
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
    ],
  },
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(", "),
    authors: [{ name: "Bintang Murtifandy" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Bintang Murtifandy"],
      tags: post.tags,
      url: `https://fundevz.xyz/blog/${slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
      creator: "@byntangxyz",
    },
    alternates: {
      canonical: `https://fundevz.xyz/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  // JSON-LD structured data for blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Bintang Murtifandy",
      url: "https://fundevz.xyz",
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fundevz.xyz/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8 md:mb-12">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>
          </header>
          <div className="prose prose-sm md:prose-lg prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              options={options}
              components={components}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
