import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
  font-family:${(props) => props.theme.fonts.body} ;
  background: ${(props) => props.theme.colors.cWhite};
  font-weight: 400;
  line-height: 1.75;
  color: ${(props) => props.theme.colors.cText};
}

h1, h2, h3, h4, h5  {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
}
h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}
a {
  text-decoration: none;
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
}
a,
button {
  line-height: 1.15;
}
button:disabled {
  cursor: not-allowed;
}
ul {
  list-style-type: none;
  padding: 0;
}

.Toastify__toast {
  text-transform: capitalize;
  font-size: 0.8rem;
}

@media screen and (min-width: 576px) {
  .Toastify__toast {
    font-size: 1rem;
  }

}

`;

export default GlobalStyles