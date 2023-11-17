import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
  /* Box sizing rule for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset styles for specific elements */
  div, header, section, article, nav, aside, footer,p {
    margin: 0;
    padding: 0;
  }
`;

export default EstilosGlobais;
