"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import Skills from "./skills";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          As a Computer Science undergraduate at Lovely Professional University,
          I thrive on learning through building, with a strong foundation in
          object-oriented programming (OOP), data structures, and software
          design. My experience includes full-stack development using React and
          Node.js, mobile app development in Kotlin, and building robust backend
          systems in Java. During my internship at Techvanto Academy, I
          developed a complete Doctor Management System with JDBC and Java
          Swing, where I engineered modular components, real-time appointment
          features, and optimized backend logic. This hands-on project improved
          my system design skills and strengthened my ability to deliver
          efficient, responsive solutions in a collaborative, feedback-driven
          environment.
        </p>
        <p>
          Driven by a passion for creating impactful user experiences, I have
          independently led AI-powered projects such as AVIORA, a contextual
          voice assistant, and TRANSLINGO, a real-time multilingual translator.
          These projects allowed me to incorporate modern technologies like VAPI
          AI, WebSockets, and performance-caching strategies, emphasizing
          usability and scalability. My skills have been recognized with awards
          such as Runner-Up at the Smart India Hackathon 2025 and are
          supplemented by certifications from Meta, AWS, and NPTEL. I am eager
          to connect with fellow technologists to build meaningful,
          high-performance solutions that address real-world problems.{" "}
          <Link
            className="underline-offset-4 hover:underline"
            href={siteConfig.links.contactForm}
          >
            contact
          </Link>{" "}
          me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
}
