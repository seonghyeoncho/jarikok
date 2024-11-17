import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Paperlogy';
    src: url('../../public/fonts/Paperlogy-4Regular.ttf') format('truetype');
    font-weight: normal;
  }

  * {
    font-family: 'Paperlogy';
  }

  body {
    background-color: ${ ({ theme }) => theme.colors.background };
  }
`;