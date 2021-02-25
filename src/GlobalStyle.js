import { createGlobalStyle } from "styled-components";
import bgsmall from "./assets/bg.webp";
import bgmedium from "./assets/bg.webp";
import bg from "./assets/bg.webp";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
  box-sizing: border-box;
};

:root {
  --font-family: 'Roboto', sans-serif;
  --font-color: black;
}

html{
  font-size: 16px;
  color: var(---font-color);
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
  background-position: bottom center; 
  background-attachment: fixed; 
  background-size: cover;
}

@media (max-width: 480px) {
    body {
        background-image: url(${bgsmall});
    }
}

@media (min-width: 481px) and (max-width: 1080px) {
    body {
        background-image: url(${bgmedium});
    }
}

@media (min-width: 1081px) {
    body {
	    background-image: url(${bg});
   }
}

button {
  font: inherit;
  padding: 0px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
}

h1 {
    font-size: clamp(1.75rem, 4.00vw, 3.00rem);
    line-height: 1.1;
}

h2 {
    font-size: clamp(1.50rem, 3.50vw, 2.50rem);
    line-height: 1.1;
}

h3 {
    font-size: clamp(1.25rem, 3.00vw, 2.00rem);
    line-height: 1.1;
}

h4 {
    font-size: clamp(1.10rem, 2.75vw, 1.75rem);
    line-height: 1.1;
}

p {
    font-size: clamp(1.00rem, 2.25vw, 1.20rem);
    line-height: 1.1;
}
    
span {
    font-size: clamp(0.75rem, 2.00vw, 1.00rem);
    line-height: 1.1;
}
`;

export default GlobalStyle;
