"use client";
import "./menu.css";

import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./Navbar";

const items = [
  {
    name: "Pho noodle soup",
    note: "slurp-worthy",
    crop: "crop-a",
    image:
      "/images/m1.png",
  },
  {
    name: "Hieu rice bowl",
    note: "the signature",
    crop: "crop-b",
    image:
      "/images/m2.png",
  },
  {
    name: "Green salad bowl",
    note: "fresh & loud",
    crop: "crop-c",
    image:
      "/images/m3.png",
  },
];
export function Menu() {
  const [active, setActive] = useState(1);
  return (
    <section id="menu" className="menu-section page-section">
      <div className="menu-header">
        <SectionLabel>Our menu / 03</SectionLabel>
        <h2 className="display">OUR MENU</h2>
        <p>
          A little bit of everything, always a lot of flavor.
          <br />
          Pick your bowl and make it yours.
        </p>
      </div>
      <div className="menu-grid">
        {items.map((item, i) => (
          <article
            className={`menu-card ${i === active ? "is-active" : ""}`}
            key={item.name}
          >
            <div className={`menu-photo ${item.crop}`} data-depth="0.35">
              <img
                className="tilt-image menu-product-image"
                src={item.image}
                alt={`${item.name} served at Hieu Bowl`}
              />
            </div>
            <p className="menu-note script">{item.note}</p>
            <h3>{item.name}</h3>
            <div className="menu-bottom">
              <span className="script only">Only</span>
              <strong>
                $24<span>.00</span>
              </strong>
              <button aria-label={`Add ${item.name}`}>
                <Plus />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          onClick={() => setActive((active + items.length - 1) % items.length)}
          aria-label="Previous menu item"
        >
          <ArrowLeft />
        </button>
        <span>
          0{active + 1} / 0{items.length}
        </span>
        <button
          onClick={() => setActive((active + 1) % items.length)}
          aria-label="Next menu item"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
