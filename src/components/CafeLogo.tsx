interface CafeLogoProps {
  size?: number;
  className?: string;
}

export default function CafeLogo({ size = 40, className = '' }: CafeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="49" fill="#1558B0" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="1.2" />

      {/* Checkerboard left flag */}
      <g opacity="0.9">
        <rect x="8" y="44" width="5" height="5" fill="white" />
        <rect x="13" y="44" width="5" height="5" fill="#1558B0" />
        <rect x="8" y="49" width="5" height="5" fill="#1558B0" />
        <rect x="13" y="49" width="5" height="5" fill="white" />
        <rect x="8" y="54" width="5" height="5" fill="white" />
        <rect x="13" y="54" width="5" height="5" fill="#1558B0" />
      </g>

      {/* Checkerboard right flag */}
      <g opacity="0.9">
        <rect x="77" y="44" width="5" height="5" fill="white" />
        <rect x="82" y="44" width="5" height="5" fill="#1558B0" />
        <rect x="77" y="49" width="5" height="5" fill="#1558B0" />
        <rect x="82" y="49" width="5" height="5" fill="white" />
        <rect x="77" y="54" width="5" height="5" fill="white" />
        <rect x="82" y="54" width="5" height="5" fill="#1558B0" />
      </g>

      {/* NIB & NOSH text */}
      <text
        x="50"
        y="30"
        textAnchor="middle"
        fill="white"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="1"
      >
        NIB &amp; NOSH
      </text>

      {/* Divider line */}
      <line x1="22" y1="34" x2="78" y2="34" stroke="white" strokeWidth="0.8" opacity="0.6" />

      {/* Ice cream cone — scoop */}
      <ellipse cx="50" cy="50" rx="12" ry="10" fill="white" />
      <ellipse cx="50" cy="50" rx="9" ry="7.5" fill="#E3EEFB" />

      {/* Waffle cone */}
      <polygon points="50,78 38,60 62,60" fill="white" />
      {/* Cone cross-hatch lines */}
      <line x1="41" y1="60" x2="47" y2="78" stroke="#1558B0" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="60" x2="50" y2="78" stroke="#1558B0" strokeWidth="1" opacity="0.4" />
      <line x1="59" y1="60" x2="53" y2="78" stroke="#1558B0" strokeWidth="1" opacity="0.4" />
      <line x1="39" y1="64" x2="61" y2="64" stroke="#1558B0" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="69" x2="60" y2="69" stroke="#1558B0" strokeWidth="1" opacity="0.3" />
      <line x1="43" y1="74" x2="57" y2="74" stroke="#1558B0" strokeWidth="1" opacity="0.3" />

      {/* Waffle diamond on scoop */}
      <rect
        x="44"
        y="44"
        width="12"
        height="12"
        fill="none"
        stroke="#1558B0"
        strokeWidth="0.8"
        opacity="0.3"
        transform="rotate(45 50 50)"
      />

      {/* EAT.DRINK.PLAY text */}
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fill="white"
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight="600"
        fontSize="7"
        letterSpacing="1.5"
        opacity="0.9"
      >
        EAT.DRINK.PLAY.
      </text>
    </svg>
  );
}
