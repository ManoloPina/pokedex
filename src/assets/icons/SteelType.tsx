import * as React from 'react';
const SteelType = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.80166 14.0113C4.79919 14.0071 4.79919 14.0019 4.80166 13.9976L9.47869 6.0067C9.48112 6.00255 9.48559 6 9.49038 6H18.7605C18.7653 6 18.7698 6.00257 18.7722 6.00675L23.398 13.9977C23.4004 14.0019 23.4004 14.0071 23.398 14.0113L18.7722 21.9932C18.7698 21.9974 18.7653 22 18.7605 22H9.49038C9.48559 22 9.48112 21.9975 9.47869 21.9933L4.80166 14.0113ZM18.4089 14C18.4089 16.3791 16.4803 18.3077 14.1013 18.3077C11.7222 18.3077 9.79358 16.3791 9.79358 14C9.79358 11.6209 11.7222 9.69232 14.1013 9.69232C16.4803 9.69232 18.4089 11.6209 18.4089 14Z"
      fill="currentColor"
    />
  </svg>
);
export default SteelType;
