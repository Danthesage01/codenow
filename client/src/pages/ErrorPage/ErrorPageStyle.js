import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  min-height: 80vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 90vw;
  max-width: 600px;
  display: block;
  margin-bottom: 2rem;
`;
export const HeadThree = styled.h3`
  margin-bottom: 0.5rem;
`;

export const Div = styled.div`
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--grey-500);
`;


export const ErrorLink = styled(Link)`
  color: ${(props) => props.theme.colors.cYellow};
  border-bottom: 0.01rem solid #3f3d56;
  text-transform: capitalize;
`;


