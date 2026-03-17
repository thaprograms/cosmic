"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  target: number;
};

const stats: StatItem[] = [
  { label: "Digital platforms in development", target: 12 },
  { label: "Core mission areas", target: 3 },
  { label: "Project categories", target: 5 },
  { label: "Solutions designed for impact", target: 100 },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState("");
  const statRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  useEffect(() => {
    const nodes = statRefs.current.filter(
      (node): node is HTMLParagraphElement => node !== null
    );

    const animateCounter = (element: HTMLParagraphElement, target: number) => {
      const duration = 1300;
      const start = performance.now();

      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = Math.floor(progress * target).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLParagraphElement;
          const target = Number(el.dataset.target || "0");
          animateCounter(el, target);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      nodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="container nav" aria-label="Primary">
          <a className="brand" href="#home">
            Adkins Enterprise LLC
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-list"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <ul id="menu-list" className={`menu-list ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#programs" onClick={closeMenu}>
                Programs
              </a>
            </li>
            <li>
              <a href="#impact" onClick={closeMenu}>
                Focus
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="container hero-content">
            <p className="eyebrow">
              Building digital platforms to support the future
            </p>
            <h1>Adkins Enterprise LLC</h1>
            <p>
              We are focused on education, health, and sustainability through
              innovative digital platforms.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Partner with us
              </a>
              <a className="btn btn-secondary" href="#programs">
                Explore programs
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <h2>About us</h2>
          <p>
            Adkins Enterprise LLC is a mission-driven organization committed to
            creating meaningful impact through digital platforms that support
            education, health, and sustainability. We develop accessible tools,
            resources, and experiences designed to empower individuals,
            strengthen communities, and provide practical solutions that meet
            real-world needs. Through innovation and purpose-driven work, we aim
            to build platforms that inform, uplift, and create lasting value.
          </p>
        </section>

        <section id="programs" className="section section-alt">
          <div className="container">
            <h2>Our programs</h2>
            <div className="card-grid">
              <article className="card">
                <h3>Education Platforms</h3>
                <p className="muted">
                  Interactive learning and digital knowledge tools
                </p>
                <p>
                  We create educational platforms, courses, and learning
                  experiences designed to make information more engaging,
                  accessible, and practical for a wide range of users.
                </p>
              </article>

              <article className="card">
                <h3>Health-Focused Solutions</h3>
                <p className="muted">
                  Technology that supports care, training, and wellness
                </p>
                <p>
                  Our health-centered projects are built to improve access to
                  useful information, streamline important workflows, and
                  support better outcomes through thoughtful digital tools.
                </p>
              </article>

              <article className="card">
                <h3>Sustainability Initiatives</h3>
                <p className="muted">
                  Purpose-driven systems for long-term community value
                </p>
                <p>
                  We develop platforms and initiatives that promote sustainable
                  thinking, community support, and forward-looking solutions
                  that can grow with real-world needs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="impact" className="section container">
          <h2>What we&apos;re building</h2>
          <div
            className="stats-grid"
            aria-label="Organization focus and platform statistics"
          >
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label}>
                <p
                  ref={(el) => {
                    statRefs.current[index] = el;
                  }}
                  className="stat-number"
                  data-target={stat.target}
                >
                  0
                </p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2>Our projects</h2>
            <div className="card-grid">
              <article className="card">
                <h3>Astrology Academy</h3>
                <p className="muted">
                  Interactive course and digital learning experience
                </p>
                <p>
                  A guided educational platform designed to make astrology more
                  engaging through structured lessons, interactive tools, and
                  accessible digital content.
                </p>
              </article>

              <article className="card">
                <h3>ChartWise</h3>
                <p className="muted">
                  Health documentation and workflow support
                </p>
                <p>
                  A health-focused platform built to support better charting,
                  reduce friction in documentation, and create smarter digital
                  assistance for care-related workflows.
                </p>
              </article>

              <article className="card">
                <h3>Community Impact Platforms</h3>
                <p className="muted">
                  Education, service access, and mission-led infrastructure
                </p>
                <p>
                  We are building digital platforms that connect people with
                  information, services, and opportunities in ways that support
                  education, wellness, and sustainable community growth.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <h2>Contact</h2>
          <p>
            Ready to collaborate or support our mission? We’d love to hear from
            you.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong> support@1adkinsenterprise.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (323) 391-3505
            </li>
            <li>
              <strong>Address:</strong> 3579 East Foothill Blvd. Pasadena, CA 91107
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © <span>{year}</span> Adkins Enterprise LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}