import * as React from 'react';
const DarkType = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    className={className}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M14.5 23a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
      />
      <path
        fill="#fff"
        d="M10.526 10.252c.556.561 1.318 1.11 2.007 1.257-.102.21-.14.376-.176.61-.206 1.323-.088 2.57.902 3.585.747.766 1.74.763 2.487-.006.987-1.018 1.107-2.265.891-3.587-.031-.195-.143-.68-.139-.686.007-.013 0-.006.074-.028.481-.112 1.382-.593 1.934-1.15 1.14.881 1.755 2.739 1.052 4.219-.96 2.021-3.203 3.841-6.044 3.262-2.163-.44-3.64-1.817-4.3-3.949-.308-.99.123-2.67 1.313-3.527Z"
      />
      <path
        fill="#fff"
        d="M15.384 13.231c-.02.394-.058.936-.449 1.37-.305.339-.59.358-.865-.003-.551-.723-.554-1.55-.332-2.389.145-.55.212-.586.761-.586.55 0 .592.043.77.583.095.288.118.577.116 1.026Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5 4h19v19H5z" />
      </clipPath>
    </defs>
  </svg>
);
export default DarkType;
