import "./calorie.css";

export function CalorieSelector() {
  const messages = [
    "FRESH INGREDIENTS",
    "BOLD VIETNAMESE FLAVOUR",
    "CRAFTED FOR YOUR CRAVINGS",
    "GOOD FOOD · GOOD MOOD",
    "FULL OF FLAVOUR",
    "FRESH · FAST · DELICIOUS"
  ];

  return (
    <section
      id="taste"
      className="marquee-section"
      aria-label="Hieu Bowl values"
    >
      <div className="marquee-track">
        <div className="marquee-content">
          {[...messages, ...messages].map((message, index) => (
            <span key={`${message}-${index}`}>
              {message}
              <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
