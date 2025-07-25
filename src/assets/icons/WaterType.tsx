import * as React from 'react';
const WaterType = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      clipRule="evenodd"
      fillRule="inherit"
      d="M19.678 17.383c0 3.213-2.614 5.817-5.839 5.817C10.614 23.2 8 20.596 8 17.383c0-3.125 5.523-11.707 5.826-12.175.007-.01.02-.01.026 0 .303.468 5.826 9.05 5.826 12.175Zm-6.812 3.952c-2.963-.648-2.456-3.93-2.456-3.93s.809 1.98 2.772 2.623c1.964.641 4.337-.3 4.337-.3s-1.69 2.255-4.653 1.607Z"
    />
  </svg>
);
export default WaterType;
