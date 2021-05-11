import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.colors.background};
    font: 400 1.25rem "PT Mono", monospace;
    color: ${props => props.theme.colors.text};
    }

  @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  .App {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 1.8fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "header header header header"
    "add add your your"
    "add add your your";
  }

  .header { grid-area: header; }
  .add { grid-area: add; }
  .your { grid-area: your; }
  }
  
`;