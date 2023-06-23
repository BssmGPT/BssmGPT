import { createGlobalStyle } from "styled-components";
import "./font-face.style.css";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Söhne, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    button {
        border: none;
        cursor: pointer;
    }

    svg {
        display: block;
    }

    ::-webkit-scrollbar {
        width: 0.5em;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(217,217,227,.8);
        border-color: rgb(255,255,255);
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
