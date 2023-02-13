import styled , {css}from "styled-components";


const shrinkLabelStyles = css`
  top: -1.2rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.cGreen};
`;

export const Div = styled.div`
  position: relative;
  margin: 2rem 0;

  input[type="password"] {
    letter-spacing: 0.3rem;
  }
`;
export const FormLabel = styled.label`
  color: ${(props) => props.theme.colors.cGrey};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.2rem;
  top: 0.875rem;
  transition: 300ms ease all;

  &:focus {
    color: ${(props) => props.theme.colors.cGreen};
  }
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${(props) => props.theme.colors.cGrey};
  font-size: 1rem;
  padding: 0.75rem 0.75rem 0.75rem 0.3rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.cGrey};
  margin: 1rem 0;
  fill: none;

  &:focus {
    outline: none;
    background: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.cGreen};
  }

  &:focus ~ ${FormLabel} {
    ${shrinkLabelStyles};
  }
`;
