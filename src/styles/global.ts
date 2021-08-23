import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
      --background: #f0f2f5;
      --blue: #1B50B6;
      --text-title: #FFF;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }



`