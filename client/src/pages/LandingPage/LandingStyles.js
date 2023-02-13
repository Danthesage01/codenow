import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
background: ${(props) => props.theme.colors.cBackground};
min-height: 100vh;
`

export const NavLink = styled(Link)`
  width: ${(props) => props.theme.features.fluidWidth};
  max-width: ${(props) => props.theme.features.maxWidth};
  margin: 0 auto;
  height: ${(props) => props.theme.features.navHeight};
  display: flex;
  align-items: center;
`;
export const Page = styled.div`
  width: ${(props) => props.theme.features.fluidWidth};
  max-width: ${(props) => props.theme.features.maxWidth};
  margin: 0 auto;
  min-height: calc(100vh - ${(props) => props.theme.features.navHeight});
  display: grid;
  align-items: center;
  margin-top: -3rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`;
export const Title = styled.h1`
  font-size: 2.52rem;
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 400;
  line-height: 1.1;
  text-transform: capitalize;
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 3.052rem;
    margin: 0;
    margin-bottom: 1.38rem;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: ${(props) => props.theme.features.letterSpacing};
  }
`;
export const Span = styled.span`
  color: ${(props) => props.theme.colors.cGreen};
`;
export const LandingImg = styled.img`
  display: none;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.cText};
  line-height: ${(props) => props.theme.features.lineHeight};
  @media ${(props) => props.theme.breakpoints.lg} {
    line-height: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 1rem;
  }
`;
export const Button = styled(Link)`
  padding: 0.375rem 1rem;
  background: ${(props) => props.color};
  color: ${(props) => props.theme.colors.cWhite};
  cursor: pointer;
  font-size: 1rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.3rem;
      padding: 0.5rem 1.5rem;
  }

  &:hover {
    background: ${(props) => props.reverse};
  }
`;

export const Div = styled.div`
`