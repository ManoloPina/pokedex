import * as React from 'react';
const IceType = ({
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
      d="M18.6711 6.02075L18.7289 11.0944L14.3036 13.2187L14.249 8.42823L18.6711 6.02075Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.1073 14.0157L18.7266 16.5214L14.3433 14.0117L18.7243 11.7104L23.1073 14.0157Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5638 14.0157L9.18313 16.5214L4.7998 14.0117L9.18085 11.7104L13.5638 14.0157Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.13379 6L13.6807 8.2519L13.5644 13.1593L9.27131 11.0331L9.13379 6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7949 21.9542L14.248 19.7023L14.3643 14.7949L18.6574 16.9212L18.7949 21.9542Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.29071 22L9.23291 16.9263L13.6582 14.802L13.7128 19.5924L9.29071 22Z"
      fill="currentColor"
    />
  </svg>
);
export default IceType;
