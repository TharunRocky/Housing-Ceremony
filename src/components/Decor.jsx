// Clean inline SVG decorations — culturally inspired, no broken raster assets.
// All SVGs use currentColor so they inherit Tailwind text color utilities.

export const Kalasham = ({ className = "", ...props }) => (
  <svg
    viewBox="0 0 240 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Mango leaves */}
    <g fill="#3F7D2C" stroke="#1F4717" strokeWidth="1.5">
      <path d="M120 60 C 70 30, 40 20, 28 40 C 60 80, 100 90, 120 78 Z" />
      <path d="M120 60 C 170 30, 200 20, 212 40 C 180 80, 140 90, 120 78 Z" />
      <path d="M120 56 C 90 18, 80 8, 110 4 C 122 24, 124 46, 120 60 Z" />
      <path d="M120 56 C 150 18, 160 8, 130 4 C 118 24, 116 46, 120 60 Z" />
      <path d="M120 60 C 95 28, 75 26, 70 22 C 80 50, 102 72, 120 70 Z" opacity="0.85" />
      <path d="M120 60 C 145 28, 165 26, 170 22 C 160 50, 138 72, 120 70 Z" opacity="0.85" />
    </g>

    {/* Coconut */}
    <ellipse
      cx="120"
      cy="80"
      rx="22"
      ry="20"
      fill="#7C3A1B"
      stroke="#3A1B14"
      strokeWidth="1.5"
    />
    <path d="M120 65 L114 78 L126 78 Z" fill="#FACC15" />
    <line
      x1="120"
      y1="62"
      x2="120"
      y2="74"
      stroke="#8B1E0F"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Neck */}
    <path
      d="M88 100 C 96 92, 144 92, 152 100 L 150 116 L 90 116 Z"
      fill="#C8941B"
      stroke="#3A1B14"
      strokeWidth="1.5"
    />

    {/* Pot body */}
    <path
      d="M70 120 C 60 170, 70 240, 120 280 C 170 240, 180 170, 170 120 Z"
      fill="url(#kalashGold)"
      stroke="#3A1B14"
      strokeWidth="2"
    />

    {/* Decorative bands */}
    <path d="M76 132 H 164" stroke="#8B1E0F" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M72 150 H 168" stroke="#8B1E0F" strokeWidth="1.5" strokeDasharray="4 4" />

    {/* Center ornament */}
    <circle cx="120" cy="200" r="18" fill="#8B1E0F" opacity="0.85" />
    <circle cx="120" cy="200" r="9" fill="#FACC15" />

    {/* Base */}
    <rect x="88" y="278" width="64" height="10" fill="#7C3A1B" rx="2" />
    <rect x="80" y="288" width="80" height="6" fill="#3A1B14" rx="2" />

    {/* Gradient (IMPORTANT) */}
    <defs>
      <linearGradient
        id="kalashGold"
        x1="70"
        y1="120"
        x2="170"
        y2="280"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#F4C147" />
        <stop offset="0.55" stopColor="#C8941B" />
        <stop offset="1" stopColor="#7A5510" />
      </linearGradient>
    </defs>
  </svg>
);

// Leaf
const Leaf = ({ x, y, rotate = 0, scale = 1 }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path
      d="M0 0 C -10 14, -10 36, 0 50 C 10 36, 10 14, 0 0 Z"
      fill="#3F7D2C"
      stroke="#1F4717"
      strokeWidth="1.2"
    />
    <line x1="0" y1="2" x2="0" y2="48" stroke="#1F4717" strokeWidth="0.8" />
  </g>
);

// Flower
const Marigold = ({ x, y, scale = 1, color = "#F58220" }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    
    {/* Outer petals */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={`outer-${i}`}
        cx="0"
        cy="-12"
        rx="5"
        ry="10"
        fill={color}
        opacity="0.95"
        transform={`rotate(${i * 30})`}
      />
    ))}

    {/* Inner petals (offset rotation) */}
    {[...Array(8)].map((_, i) => (
      <ellipse
        key={`inner-${i}`}
        cx="0"
        cy="-7"
        rx="3.5"
        ry="6"
        fill="#FACC15"
        transform={`rotate(${i * 45 + 22})`}
      />
    ))}

    {/* Center */}
    <circle cx="0" cy="0" r="3" fill="#8B1E0F" />
  </g>
);

// Toran
export const Toran = ({ className = "" }) => {
  const items = [];

  const cols = 22; // exact density from original

  // Leaves (curved + alternating offset)
  for (let i = 0; i < cols; i++) {
    const t = i / (cols - 1);

    const x = 40 + t * 1120; // spread across width
    const y =
      24 +
      Math.sin(t * Math.PI) * -10 + // arc curve
      (i % 2 === 0 ? 0 : 4); // alternating stagger

    items.push(
      <g key={`leaf-${i}`}>
        <Leaf x={x - 8} y={y} rotate={-15} scale={1.2} />
        <Leaf x={x + 8} y={y} rotate={15} scale={1.2} />
      </g>
    );
  }

  // Marigolds (evenly distributed along same arc)
  for (let i = 0; i < 11; i++) {
    const t = i / 10;

    const x = 80 + t * 1040;
    const y = 70 + Math.sin(t * Math.PI) * 8;

    items.push(
      <Marigold
        key={`m-${i}`}
        x={x}
        y={y}
        scale={1.1}
        color={i % 2 === 0 ? "#F58220" : "#E55A0A"}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 1200 110"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {/* Hanging string */}
      <path
        d="M 30 14 C 300 30, 900 30, 1170 14"
        stroke="#8B1E0F"
        strokeWidth="2"
        fill="none"
      />

      {items}
    </svg>
  );
};

// Mandala
export const Mandala = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="100" cy="100" r="6" fill="currentColor" />
    <circle cx="100" cy="100" r="22" />
    <circle cx="100" cy="100" r="40" strokeDasharray="3 4" />
    <circle cx="100" cy="100" r="58" />
    <circle cx="100" cy="100" r="78" strokeDasharray="2 6" />
    <circle cx="100" cy="100" r="94" />

    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 100 100)`}>
        <path
          d="M 100 22 Q 110 50, 100 78 Q 90 50, 100 22 Z"
          fill="currentColor"
          opacity="0.18"
        />
        <circle cx="100" cy="14" r="3" fill="currentColor" />
      </g>
    ))}

    {[...Array(24)].map((_, i) => (
      <g key={`p-${i}`} transform={`rotate(${i * 15} 100 100)`}>
        <circle cx="100" cy="48" r="2" fill="currentColor" opacity="0.6" />
      </g>
    ))}
  </svg>
);

// Om
export const Om = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor">
    <path d="M44 32c0 7.7-6.3 14-14 14a13.9 13.9 0 0 1-12-6.9..." />
  </svg>
);