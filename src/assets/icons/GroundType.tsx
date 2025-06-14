import * as React from 'react';
const GroundType = ({
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
      d="M9.52389 19.5549C9.51954 19.5549 9.51651 19.5506 9.51795 19.5465L13.6028 8.00419C13.6037 8.00168 13.6061 8 13.6087 8H17.9695C17.9721 8 17.9745 8.00169 17.9754 8.00422L21.9997 19.5465C22.0011 19.5506 21.998 19.5549 21.9937 19.5549H9.64664H9.52389ZM6.00629 19.6C6.0019 19.6 5.99887 19.5956 6.00041 19.5915L9.04228 11.4705C9.0432 11.468 9.04555 11.4664 9.04817 11.4664H11.6912C11.6956 11.4664 11.6986 11.4708 11.6971 11.4749L8.75571 19.5959C8.75481 19.5984 8.75244 19.6 8.7498 19.6H6.00629Z"
      fill="currentColor"
    />
  </svg>
);
export default GroundType;
