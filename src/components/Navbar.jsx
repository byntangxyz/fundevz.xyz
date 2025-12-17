"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedContent from "@/components/ui/AnimatedContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link
            href="/"
            className="text-2xl font-sora font-semibold text-white flex items-center gap-4"
          >
            <AnimatedContent
              distance={90}
              direction="vertical"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <Image
                src="/fn-logo.png"
                alt="Fundz.me Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </AnimatedContent>

            <AnimatedContent
              distance={90}
              direction="vertical"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              fundevz<span className="text-blue-700">.xyz</span>
            </AnimatedContent>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-white font-sans">
            <li>
              <Link href="/" className="hover:text-blue-700 transition">
                <AnimatedContent
                  distance={90}
                  direction="vertical"
                  reverse={true}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.5}
                >
                  Home
                </AnimatedContent>
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-blue-700 transition">
                <AnimatedContent
                  distance={90}
                  direction="vertical"
                  reverse={true}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.6}
                >
                  About
                </AnimatedContent>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-700 transition">
                <AnimatedContent
                  distance={90}
                  direction="vertical"
                  reverse={true}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.7}
                >
                  Projects
                </AnimatedContent>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-700 transition">
                <AnimatedContent
                  distance={90}
                  direction="vertical"
                  reverse={true}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.8}
                >
                  Blog
                </AnimatedContent>
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-700 transition">
                <AnimatedContent
                  distance={90}
                  direction="vertical"
                  reverse={true}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.9}
                >
                  Contact
                </AnimatedContent>
              </Link>
            </li>
          </ul>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* === Mobile Menu Overlay === */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[60] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* === Slide-in Menu === */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#000000] shadow-xl p-6 transition-transform duration-300 md:hidden z-[70] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Navigation</h2>
          <button
            className="text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col gap-4 text-white text-lg">
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/#home"
              className="hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/#about"
              className="hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/projects"
              className="hover:text-blue-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/blog"
              className="hover:text-blue-700"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/#contact"
              className="hover:text-blue-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
