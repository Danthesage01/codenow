import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
width: ${props => props.theme.features.fluidWidth};
max-width:  ${props => props.theme.features.maxWidth};
margin: 0 auto;
`

export const Fullpage = styled.div`
min-height: 100vh;
`
export const Underline = styled.div`
 background:  ${props => props.theme.colors.cGreen};
  width: 7rem;
  height: 0.25rem;
  margin: 0 auto;
  margin-top: -1rem;
`


export const LinkButton = styled(Link)`
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