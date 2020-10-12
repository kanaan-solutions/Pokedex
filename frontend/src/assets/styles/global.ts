import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100vh;
    }
    body {
        background: var(--color-background);
    }
    html, body, #root {
        border: 0;
        outline: 0;
    }
    :root {
        --color-background: #FFFFFF;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        --color-primary: #DCDCDC;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        --color-secondary: #04D361;
        --color-secondary-dark: #04BF58;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #32264D;
        --color-text-complement: #9C98A6;
        --color-text-base: #6A6180;
        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-button-text: #FFFFFF;
        --color-box-base: #FFFFFF;
        --color-box-footer: #FAFAFC;
    }
    body, input, button, textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-text-base);
    }
    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;
