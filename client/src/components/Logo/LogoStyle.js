import styled from "styled-components";

export const Img = styled.img`
  display: block;
  height: 3rem;
`

export const Nav = styled.nav`
  width: ${(props) => props.theme.features.fluidWidth};
  max-width: ${(props) => props.theme.features.maxWidth};
  margin: 0 auto;
  height: ${(props) => props.theme.features.navHeight};
  display: flex;
  align-items: center;
`;