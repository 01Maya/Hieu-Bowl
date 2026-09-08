"use client";
import "./hero.css";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Navbar";

const bowlSlides = [
  {
    image:
      "/images/b1.png",
    alt: "Colorful Vietnamese rice bowl with vegetables and chopsticks",
    note: "good food\ngood mood",
  },
  {
    image:
      "/images/b2.png",
    alt: "Fresh Vietnamese salad bowl with avocado and herbs",
    note: "fresh bowl\nbright soul",
  },
  {
    image:
      "/images/b3.png",
    alt: "Vietnamese noodle soup with herbs, beef, lime, and chilies",
    note: "slow slurp\nbig joy",
  },
];

export function Hero() {
  const [activeBowl, setActiveBowl] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const fullDescription =
    "A fresh take on the Vietnamese bowl. Made with bright herbs, honest ingredients, and a little bit of Hieu.";
  const [typedDescription, setTypedDescription] = useState("");
  useEffect(() => {
    if (carouselPaused) return;
    const timer = window.setInterval(
      () => setActiveBowl((current) => (current + 1) % bowlSlides.length),
      5600,
    );
    return () => window.clearInterval(timer);
  }, [carouselPaused]);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedDescription(fullDescription.slice(0, index));
      if (index >= fullDescription.length) window.clearInterval(timer);
    }, 28);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="hero-section section-parallax">
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-copy reveal-group">
        <SectionLabel>Vietnamese kitchen / 01</SectionLabel>
        <h1>
          <span className="script reveal-mask">Rice</span>
          <span className="display reveal-up">BOWL</span>
        </h1>
        <p className="hero-description reveal-up typewriter-copy">
          {typedDescription}
          <span className="typewriter-caret" aria-hidden="true">
            |
          </span>
        </p>
        <a className="red-button reveal-up" href="#menu">
          VIEW OUR MENU <ArrowDownRight aria-hidden="true" />
        </a>
      </div>
      <div
        className="hero-art"
        aria-label="Vietnamese bowl carousel"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
        onFocus={() => setCarouselPaused(true)}
        onBlur={() => setCarouselPaused(false)}
      >
        <div className="purple-blob" data-depth="0.2" />
        <div className="purple-blob-shape" aria-hidden="true" />
        <div className="hero-ring" aria-hidden="true" />
        <div className="leaf leaf-one" data-depth="0.8">
          ✦
        </div>
        <div className="leaf leaf-two" data-depth="1">
          ✦
        </div>
        <div className="chili" aria-hidden="true" />
        <div className="chopsticks" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="hero-bowl-stage" key={activeBowl}>
          <img
            className="hero-bowl float-image tilt-image"
            src={bowlSlides[activeBowl].image}
            alt={bowlSlides[activeBowl].alt}
          />
        </div>
        <span className="hero-note">
          {bowlSlides[activeBowl].note.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </span>
        <div className="hero-carousel-controls">
          <button
            type="button"
            onClick={() =>
              setActiveBowl(
                (activeBowl + bowlSlides.length - 1) % bowlSlides.length,
              )
            }
            aria-label="Previous bowl"
          >
            <ArrowLeft />
          </button>
          <span>0{activeBowl + 1} / 03</span>
          <button
            type="button"
            onClick={() => setActiveBowl((activeBowl + 1) % bowlSlides.length)}
            aria-label="Next bowl"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <a className="scroll-cue" href="#taste">
        <span>SCROLL TO TASTE</span>
        <ArrowDownRight />
      </a>
    </section>
  );
}
