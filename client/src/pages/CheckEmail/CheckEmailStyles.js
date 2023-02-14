import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  /* min-height: 100vh; */
  text-align: center;
  width: 90vw;
  max-width: 600px ;
  background: ${(props) => props.theme.colors.cGreen};
  margin: 0 auto;
  margin-top: 5rem;
`;

export const HeadThree = styled.h4`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fonts.xmdText};
  color: ${(props) => props.theme.colors.cWhite};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.xlgText};
  }
`;


export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fonts.lgText};
  color: ${(props) => props.theme.colors.cWhite};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.fonts.xmdText};
  }
`;

export const LoginLink = styled(Link)`
  color: ${(props) => props.theme.colors.cGreen};
  border-bottom: 0.01rem solid #3f3d56;
  text-transform: capitalize;
`;
