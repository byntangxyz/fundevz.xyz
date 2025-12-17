"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-sora">
              fundevz<span className="text-primary">.xyz</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Programmer, Network Engineer, and DevOps
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/byntangxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/bintangmurtifandy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-[#0A66C2] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/byntangxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-pink-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:contact@fundevz.xyz"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Site Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                <Link href="https://status.fundevz.xyz" target="_blank">
                  Status Page
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="https://fundzsource.web.id" target="_blank">
                  Gitea Source
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@fundevz.xyz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@fundevz.xyz
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Yogyakarta, Indonesia
              </li>
              <li className="text-sm text-muted-foreground">
                Available for freelance
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Bintang Murtifandy. All Right not Reserved
            </p>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
