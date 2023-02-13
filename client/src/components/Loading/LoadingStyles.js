import styled from "styled-components";


export const Loading = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.cGreen};
  border-top-color: ${(props) => props.theme.colors.cYellow};
  animation: spinner 0.6s linear infinite;
  margin: ${props => props.center && "0 auto"};
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 6rem;
    height: 6rem;
  }
`;


// export const Wrapper = styled.div`
//   width: 100%;
//   margin: 0 auto;
// `;
