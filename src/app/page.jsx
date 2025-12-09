"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  School,
  Code2,
  Network,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Globe,
} from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import ShinyText from "@/components/ui/ShinyText";
import AnimatedContent from "@/components/ui/AnimatedContent";
import ContactForm from "@/components/ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const progressBarsRef = useRef([]);
  const timelineLineRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const projectCardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    progressBarsRef.current.forEach((bar, index) => {
      const percentage = bar.dataset.percentage;

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${percentage}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });

    // Animate timeline line
    if (timelineLineRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineLineRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate timeline items
    timelineItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2,
          }
        );
      }
    });

    // Animate project cards
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2,
          }
        );
      }
    });
  }, []);

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-700" },
    { name: "React / Next.js", level: 85, color: "from-cyan-400 to-blue-600" },
    { name: "Python", level: 75, color: "from-blue-600 to-yellow-400" },
    { name: "Docker / DevOps", level: 70, color: "from-blue-500 to-cyan-500" },
  ];

  const timeline = [
    {
      date: "March, 2022",
      title: "Tech Ethusiast",
      description:
        'Addicted to computer hardware ethusiast because of "#MendingRakitPC".',
      icon: Rocket,
    },
    {
      date: "July 2024",
      title: "STEMBAYO's Arc",
      description:
        "Joined Vocational High School 2 Depok Sleman as a SIJA student.",
      icon: School,
    },
    {
      date: "June 2025",
      title: "Development Sprint",
      description:
        "Frontend and backend development. Acquired JS, TS, and PHP programming Language",
      icon: Code2,
    },
    {
      date: "Nowadays",
      title: "Building Ecosystem",
      description:
        "Studying IoT, IaaS, PaaS, SaaS and MikroTik and trying make ecosystem.",
      icon: Network,
    },
  ];

  const projects = [
    {
      id: "mern-auth",
      title: "MERN Stack with Auth",
      description:
        "A fullstack MERN application with JWT based authentication, middleware, and responsive UI.",
      image: "/images/mern.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: "armbian-server",
      title: "Home Server with Armbian",
      description:
        "Build your own cheap home server with Armbian OS on ARM-based hardware for efficient hosting.",
      image: "/images/armbian.png",
      tags: ["Linux", "ARM", "DevOps", "Networking"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "fnalinks",
      title: "fnalinks URL Shortener",
      description:
        "A modern URL shortener service that makes your links easy to share and track anywhere.",
      image: "/images/fnalinks.png",
      tags: ["Next.js", "PostgreSQL", "API", "Analytics"],
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6"
        itemScope
        itemType="https://schema.org/Person"
      >
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.5}
        >
          <h1 className="text-5xl font-bold mb-4 font-sora">
            <ShinyText
              text=" Hi, I’m Bintang Murtifandy"
              disabled={false}
              speed={3}
              className="animate-shine"
            />
          </h1>
        </AnimatedContent>

        <p className="text-lg max-w-2xl mb-6 font-geist-mono">
          A fullstack developer passionate about building web applications,
          devops, networking, and IoT solutions.
        </p>
        <div className="flex gap-4">
          <Link
            href="/#projects"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-xl border border-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto min-h-screen"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center mb-4">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="animate-shine"
          />
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gray-300 rounded-xl" />
          </div>

          <div className="w-full md:w-1/2 space-y-4 font-geist-mono">
            <p>
              Hello! I'm Bintang Murtifandy, a passionate fullstack developer
              with a keen interest in devops, networking, and IoT. I love
              creating efficient and innovative solutions that make a
              difference.
            </p>
            <p>
              With a strong foundation in both frontend and backend
              technologies, I enjoy building web applications that are not only
              functional but also user-friendly. My journey in tech has been
              driven by curiosity and a desire to continuously learn and grow.
            </p>
          </div>
        </div>

        {/* Timeline Learning Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-12 text-center">
            Timeline Learning
          </h3>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-secondary">
              <div
                ref={timelineLineRef}
                className="h-full bg-gradient-to-r from-primary to-purple-500"
              />
            </div>

            {/* Timeline Items */}
            <div className="relative grid grid-cols-4 gap-4">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (timelineItemsRef.current[index] = el)}
                    className="flex flex-col items-center"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-4 relative z-10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-2">
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-secondary">
              <div
                ref={timelineLineRef}
                className="w-full bg-gradient-to-b from-primary to-purple-500"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (timelineItemsRef.current[index] = el)}
                    className="flex gap-4"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center flex-shrink-0 relative z-10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.date}
                      </p>
                      <h4 className="font-semibold text-sm mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Progress Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
            My Programming Journey
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm md:text-base">
                    {skill.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    ref={(el) => (progressBarsRef.current[index] = el)}
                    data-percentage={skill.level}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 max-w-7xl mx-auto"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-center mb-4">
            <ShinyText
              text="Featured Projects"
              disabled={false}
              speed={3}
              className="animate-shine"
            />
          </h1>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my projects that demonstrate my skills in
            fullstack development, devops, networking, and IoT.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              ref={(el) => (projectCardsRef.current[index] = el)}
              className="group relative"
            >
              <div className="relative h-[480px] md:h-[520px] rounded-2xl overflow-hidden bg-secondary border border-border hover:border-primary transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl flex flex-col">
                {/* Top Image Section - 16:9 Aspect Ratio */}
                <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
                </div>

                {/* Bottom Content Section with Gradient */}
                <div
                  className={`relative flex-1 bg-gradient-to-br ${project.gradient} p-6 md:p-8 flex flex-col justify-between`}
                >
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/90 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center text-sm font-medium text-white">
                    <span className="mr-2">View Project</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 font-medium"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 max-w-5xl mx-auto min-h-screen"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            <ShinyText
              text="Let's Work Together"
              disabled={false}
              speed={3}
              className="animate-shine"
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-muted-foreground">
              Or connect with me on
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="https://github.com/byntangxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <div className="relative">
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">@byntangxyz</p>
            </div>
          </Link>

          <Link
            href="https://linkedin.com/in/bintangmurtifandy/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border hover:border-[#0A66C2] transition-all duration-300 hover:shadow-lg hover:shadow-[#0A66C2]/20 hover:-translate-y-1"
          >
            <div className="relative">
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-[#0A66C2] transition-colors duration-300" />
              <div className="absolute inset-0 bg-[#0A66C2]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">
                Bintang Murtifandy
              </p>
            </div>
          </Link>

          <Link
            href="https://instagram.com/byntangxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1"
          >
            <div className="relative">
              <Instagram className="w-6 h-6 text-foreground group-hover:text-pink-500 transition-colors duration-300" />
              <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground">Instagram</p>
              <p className="text-xs text-muted-foreground">@byntangxyz</p>
            </div>
          </Link>

          <Link
            href="mailto:contact@fundevz.xyz"
            className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <div className="relative">
              <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">
                contact@fundevz.xyz
              </p>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Available for freelance opportunities and collaborations
          </p>
        </div>
      </section>
    </main>
  );
}
