import "./about.css";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Navbar";

export function About() {
  return (
    <section id="about" className="about-section page-section">
      <div className="about-image-wrap reveal" data-depth="0.22">
        <div className="yellow-arc" aria-hidden="true" />
        <img
          className="about-image tilt-image"
          src="/images/about.png"
          alt="Fresh Vietnamese salad bowl with avocado, cucumber, quinoa, peas, tomato, and herbs"
        />
      </div>
      <div className="about-copy">
        <Reveal>
          <SectionLabel>About / 02</SectionLabel>
          <h2>
            <span className="script">hieu</span>{" "}
            <span className="display">bowl</span>
          </h2>
          <p>
            We believe a bowl can hold a whole story. Hieu Bowl brings the
            color, comfort, and generosity of Vietnamese cooking to your
            everyday table — one beautiful, balanced bowl at a time.
          </p>
          <a href="#menu" className="red-button magnetic">
            VIEW OUR MENU <ArrowUpRight />
          </a>
        </Reveal>
      </div>
      <span className="about-doodle" aria-hidden="true">
        eat
        <br />
        bright
      </span>
    </section>
  );
}
