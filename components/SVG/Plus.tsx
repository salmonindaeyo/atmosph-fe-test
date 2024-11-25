import { ISVG } from "interfaces/SVG";

const Plus: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 35 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      // fill-rule="evenodd"
      // clip-rule="evenodd"
      d="M20 0.638672H15V15.6387H0V20.6387H15V35.6387H20V20.6387H35V15.6387H20V0.638672Z"
      className={className}
    />
  </svg>
);

export default Plus;
