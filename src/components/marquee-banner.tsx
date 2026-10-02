"use client";

const marqueeItems = [
  "AI Development",
  "Full-Stack",
  "Product Building",
  "UI/UX Design",
  "Web Design",
  "Machine Learning",
  "Automation",
  "NLP",
  "React",
  "Next.js",
  "Python",
  "Research",
  "Software Engineering",
];

export function MarqueeBanner() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(240, 235, 224, 0.04)",
        borderBottom: "1px solid rgba(240, 235, 224, 0.04)",
        background: "rgba(240,235,224,0.01)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-4 px-4"
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(240, 235, 224, 0.18)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "#c5562a",
                opacity: 0.4,
                fontSize: "0.5rem",
              }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
