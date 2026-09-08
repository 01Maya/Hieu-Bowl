"use client";
import "./cta.css";

import { ArrowUpRight, Leaf } from "lucide-react";
import { Reveal } from "./Navbar";
export function CTA() {
  return (
    <section id="start" className="cta-section page-section">
      <div className="cta-copy">
        <Reveal>
          <span className="eyebrow">Stay in the know / 05</span>
          <h2 className="display">
            READY TO
            <br />
            GET STARTED?
          </h2>
          <p>
            Join the bowl club for new menu drops, good news, and a little extra
            crunch.
          </p>
        </Reveal>
      </div>
      <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Your email address</label>
        <div>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <button type="submit">
            GET STARTED <ArrowUpRight />
          </button>
        </div>
      </form>
<div className="cta-art">
  

  <img
    src="/images/cta.png"
    alt="Fresh salad bowl with avocado, cucumber, quinoa, peas, tomato, and herbs"
  />

  <Leaf className="cta-leaf" />
</div>
      
    </section>
  );
}
