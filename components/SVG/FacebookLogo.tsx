import * as React from "react";

import { ISVG } from "interfaces/SVG";

const FacebookLogo: React.FC<ISVG> = ({ width, height, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="#6c7bb9"
  >
    <path
      className={className}
      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
    />
  </svg>
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={width}
  //   height={height}
  //   viewBox="0 0 392.61 61.52"
  //   fill="#6c7bb9"
  // >
  //   <path
  //     d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"
  //     className={className}
  //   />
  // </svg>
);

export default FacebookLogo;
