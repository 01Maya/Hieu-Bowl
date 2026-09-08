"use client";
import "./navbar.css";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["HOME", "top"],
  ["ABOUT", "about"],
  ["MENU", "menu"],
  ["CUSTOMERS", "customers"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const nav = document.querySelector(".site-nav");
    const revealItems = document.querySelectorAll(".reveal, .reveal-group");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    ).filter((section) => section.id !== "calories");
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      nav?.classList.toggle("scrolled", window.scrollY > 24);
      const current = sections.reduce(
        (active, section) =>
          window.scrollY + 140 >= section.offsetTop ? section.id : active,
        "top",
      );
      document
        .querySelectorAll<HTMLAnchorElement>("[data-nav-target]")
        .forEach((link) =>
          link.toggleAttribute(
            "aria-current",
            link.dataset.navTarget === current,
          ),
        );
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const depth = Number(el.dataset.depth || 0);
        const rect = el.getBoundingClientRect();
        const offset =
          (window.innerHeight / 2 - (rect.top + rect.height / 2)) *
          depth *
          0.06;
        el.style.setProperty("--sy", `${offset}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const onPointer = (event: PointerEvent) => {
      if (
        window.innerWidth < 800 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const d = Number(el.dataset.depth || 0);
        el.style.setProperty("--mx", `${x * d * 8}px`);
        el.style.setProperty("--my", `${y * d * 8}px`);
      });
    };
    const tiltItems = Array.from(
      document.querySelectorAll<HTMLElement>(".tilt-image"),
    );
    const onTiltMove = (event: PointerEvent) => {
      if (
        window.innerWidth < 800 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;
      const el = event.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty(
        "--tilt",
        `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 7}deg) scale(1.035)`,
      );
    };
    const resetTilt = (event: PointerEvent) =>
      (event.currentTarget as HTMLElement).style.setProperty(
        "--tilt",
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
      );
    tiltItems.forEach((item) => {
      item.addEventListener("pointermove", onTiltMove);
      item.addEventListener("pointerleave", resetTilt);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      tiltItems.forEach((item) => {
        item.removeEventListener("pointermove", onTiltMove);
        item.removeEventListener("pointerleave", resetTilt);
      });
    };
  }, []);
  return (
    <header className={`site-nav ${open ? "is-open" : ""}`}>
      <a className="brand" href="#top" aria-label="Hieu Bowl home">
        HIEU <span>BOWL</span>
        <i />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, target]) => (
          <a key={label} href={`#${target}`} data-nav-target={target}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-order" href="#start">
        ORDER <ArrowUpRight aria-hidden="true" />
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, target], index) => (
          <a
            style={{ "--i": index } as React.CSSProperties}
            key={label}
            href={`#${target}`}
            data-nav-target={target}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          style={{ "--i": links.length } as React.CSSProperties}
          href="#start"
          data-nav-target="start"
          onClick={() => setOpen(false)}
        >
          ORDER <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
