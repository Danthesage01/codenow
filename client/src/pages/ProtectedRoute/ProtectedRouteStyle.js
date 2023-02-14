import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.cBackground};
`;
export const Info = styled.form`
  width: 90vw;
  max-width: 500px;
  padding: 2.5rem 2rem;
  margin: 10rem auto;
  
  
`;
export const Section = styled.section`
  display: grid;
  align-items: center;
`;
