import * as React from 'react';
const Pokeball = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path fill="url(#a)" d="M28 14A14 14 0 1 0 0 14h28Z" opacity={0.4} />
    <circle cx={14} cy={14} r={12.25} stroke="currentColor" strokeWidth={1.5} />
    <circle
      cx={14}
      cy={14}
      r={3.94}
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path stroke="currentColor" strokeWidth={1.5} d="M7.5 14H0M28 14h-7.5" />
    <defs>
      <linearGradient
        id="a"
        x1={23}
        x2={5}
        y1={0}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3E75C3" />
        <stop offset={1} stopColor="#3E75C3" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default Pokeball;
