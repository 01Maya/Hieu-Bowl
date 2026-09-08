"use client";
import "./testimonials.css";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionLabel } from "./Navbar";

const foodImageUrl =
  "/images/about.png";
const reviews = [
  {
    quote: "The kind of lunch that makes the rest of your day feel possible.",
    name: "Mia Nguyen",
    role: "regular / creative director",
  },
  {
    quote:
      "Bright, generous, and packed with the freshest herbs. I am officially a bowl person.",
    name: "Jon Bell",
    role: "regular / cyclist",
  },
  {
    quote: "It feels like a warm hug from Hanoi, with a very good playlist.",
    name: "Tara Pham",
    role: "regular / ceramicist",
  },
];
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const review = reviews[active];
  const changeReview = (next: number, movement: "next" | "previous") => {
    setDirection(movement);
    setActive(next);
  };
  useEffect(() => {
    const timer = window.setInterval(
      () => changeReview((active + 1) % reviews.length, "next"),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [active]);
  return (
    <section
      id="customers"
      className="testimonial-section page-section"
      aria-label="Happy customers"
    >
      <div className="testimonial-food reveal reveal-left" data-depth="0.28">
        <img
          src={foodImageUrl}
          alt="Colorful Hieu Bowl with rice, vegetables, herbs, chilies, and chopsticks"
        />
      </div>
      <div
        className={`testimonial-card reveal reveal-right ${direction}`}
        key={active}
        aria-live="polite"
      >
        <div className="quote-icon">
          <Quote />
        </div>
        <blockquote>{review.quote}</blockquote>
        <div className="reviewer">
          <div className="avatar">
            {review.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <strong>{review.name}</strong>
            <span>{review.role}</span>
          </div>
        </div>
      </div>
      <div className="testimonial-copy reveal reveal-up">
        <SectionLabel>Good words / 04</SectionLabel>
        <h2 className="display">
          OUR HAPPY
          <br />
          CUSTOMERS
        </h2>
        <p>
          There is nothing we love more than seeing empty bowls and happy faces
          leave our kitchen.
        </p>
        <div className="carousel-controls">
          <button
            className="carousel-arrow"
            onClick={() =>
              changeReview(
                (active + reviews.length - 1) % reviews.length,
                "previous",
              )
            }
            aria-label="Previous testimonial"
          >
            <ArrowLeft />
          </button>
          <span
            className="carousel-count"
            aria-label={`Testimonial ${active + 1} of ${reviews.length}`}
          >
            0{active + 1} / 03
          </span>
          <button
            className="carousel-arrow"
            onClick={() => changeReview((active + 1) % reviews.length, "next")}
            aria-label="Next testimonial"
          >
            <ArrowRight />
          </button>
        </div>
        <div className="carousel-progress" aria-hidden="true">
          <span key={active} />
        </div>
        <div className="carousel-dots" aria-label="Choose testimonial">
          {reviews.map((item, index) => (
            <button
              key={item.name}
              className={index === active ? "active" : ""}
              onClick={() =>
                changeReview(index, index > active ? "next" : "previous")
              }
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={index === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
