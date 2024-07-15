import { SVGProps } from "react";

const Cart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 48 46"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M2 2h8l5.36 26.78a4 4 0 0 0 4 3.22H38.8a4 4 0 0 0 4-3.22L46 12H12m8 30a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm22 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);

export { Cart };
