import { SVGProps } from "react";

interface CartProps extends SVGProps<SVGSVGElement> {
  totalQuantity: number;
  onClick?: ()=>void;
}

const Cart = ({ totalQuantity, onClick, ...props }: CartProps) => (
  <div onClick={onClick} className="position-relative d-inline-block">
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
    {totalQuantity > 0 && (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalQuantity}
      </span>
    )}
  </div>
);

export { Cart };
