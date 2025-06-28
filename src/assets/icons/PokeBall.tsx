import * as React from 'react';
const Pokeball = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.4}
      d="M18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 1.8021e-07 9 0C6.61305 -1.8021e-07 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 3.60419e-07 6.61305 0 9L9 9H18Z"
      fill="url(#paint0_linear_6819_7458)"
    />
    <circle cx={9} cy={9} r={8.25} stroke="currentColor" strokeWidth={1.5} />
    <circle
      cx={8.99996}
      cy={8.99999}
      r={2.52273}
      fill="white"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path d="M6.13636 9H0" stroke="currentColor" strokeWidth={1.5} />
    <path
      d="M16.9929 8.99997L11.3286 8.99997"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <defs>
      <linearGradient
        x1={15}
        y1={-2.98023e-7}
        x2={-1.5}
        y2={10.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={1} stopColor="currentColor" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default React.memo(Pokeball);
