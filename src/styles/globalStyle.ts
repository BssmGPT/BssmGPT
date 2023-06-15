import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 0.5em;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(217,217,227,.8);
        border-color: rgba(255,255,255,var(--tw-border-opacity));
        border-radius: 9999px;
        border-width: 0;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(236,236,241,1);
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 9999px;
    }
`;
