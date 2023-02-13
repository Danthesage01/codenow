import styled from "styled-components";

export const Section = styled.section``;

export const MainDashboard = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: auto 1fr;
  }
`;

export const PageDashboard = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 2rem 0;
  @media (min-width: 992px) {
    width: 90%;
  }
`;

export const Div = styled.div`
`