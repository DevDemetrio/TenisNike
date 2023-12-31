import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`

body{
  font-family: 'Montserrat', sans-serif;
}

  /* Box sizing rule for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset styles for specific elements */
  div, header, section, article, nav, aside, footer,p,html,body,h1 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img{
    max-width: 100%;
    display: block;
  }
`;

export default EstilosGlobais;
