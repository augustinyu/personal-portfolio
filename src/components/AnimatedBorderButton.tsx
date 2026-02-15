import type { ReactNode } from "react";

export const AnimatedBorderButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="">
      {/* Animated SVG Border */}
      <svg
        className=""
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
        />
      </svg>
      <span className="">{children}</span>
    </button>
  );
};
