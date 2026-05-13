"use client";

interface NahLogoProps {
  className?: string;
  color?: "black" | "white" | "gold";
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  black: "#0A0A0A",
  white: "#FAFAF8",
  gold: "#C9A84C",
};

const sizeMap = {
  sm: { width: 80, height: 32 },
  md: { width: 120, height: 48 },
  lg: { width: 180, height: 72 },
};

export default function NahLogo({ className, color = "black", size = "md" }: NahLogoProps) {
  const fill = colorMap[color];
  const { width, height } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NAH - Nawat Alalmas Holding"
    >
      {/* N */}
      <path
        d="M8 80V16H28L60 60V16H76V80H56L24 36V80H8Z"
        fill={fill}
      />

      {/* Diamond gem shape replacing the A crossbar */}
      <g transform="translate(96, 0)">
        {/* Diamond top facets */}
        <path d="M24 4L14 18H34L24 4Z" fill={fill} />
        {/* Diamond middle band */}
        <path d="M14 18L24 4L34 18" fill={fill} opacity="0.7" />
        {/* Diamond bottom */}
        <path d="M14 18L24 44L34 18H14Z" fill={fill} />
        {/* Left facet shading */}
        <path d="M14 18L24 44L9 26L14 18Z" fill={fill} opacity="0.5" />
        {/* Right facet shading */}
        <path d="M34 18L24 44L39 26L34 18Z" fill={fill} opacity="0.5" />
        {/* Top left facet */}
        <path d="M9 26L14 18L4 22L9 26Z" fill={fill} opacity="0.3" />
        {/* Top right facet */}
        <path d="M39 26L34 18L44 22L39 26Z" fill={fill} opacity="0.3" />
      </g>

      {/* A with diamond replacing the peak */}
      <path
        d="M96 80L122 16H136L162 80H145L139 62H119L113 80H96ZM123 50H135L129 30L123 50Z"
        fill={fill}
      />

      {/* H */}
      <path
        d="M170 80V16H186V40H214V16H230V80H214V54H186V80H170Z"
        fill={fill}
      />

      {/* Bottom rule line */}
      <rect x="8" y="88" width="224" height="1" fill={fill} opacity="0.3" />
    </svg>
  );
}
