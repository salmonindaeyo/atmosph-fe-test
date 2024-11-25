import { ISVG } from "interfaces/SVG";

const HalfCircle: React.FC<ISVG> = ({ width, height, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 237 121.74"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M236.968 121.742C237.333 105.888 234.539 90.1213 228.749 75.3677C222.959 60.6142 214.291 47.1717 203.254 35.8298C192.217 24.488 179.034 15.4757 164.48 9.32268C149.925 3.16969 134.292 7.04239e-05 118.5 7.11141e-05C102.708 7.18044e-05 87.0753 3.16969 72.5205 9.32268C57.9657 15.4757 44.7825 24.488 33.7456 35.8298C22.7087 47.1717 14.0407 60.6142 8.25105 75.3677C2.46139 90.1213 -0.333155 105.888 0.0316191 121.742L236.968 121.742Z"
        className={className}
      />
    </svg>
  );
};

export default HalfCircle;
