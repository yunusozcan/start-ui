import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const ErrorCircleOutline = ({ size, width, height, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={size ?? width}
    height={size ?? height}
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="none" />
    <path d="m15 9-6 6M9 9l6 6" fill="none" stroke="currentColor" />
  </svg>
);

export default ErrorCircleOutline;
