import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.cWhite};
  background: ${(props) => props.theme.colors.cGreen};
  border: transparent;
  border-radius: ${(props) => props.theme.features.borderRadius};
  letter-spacing: ${(props) => props.theme.features.letterSpacing};
  padding: 0.5rem 0.875rem;
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  transition: ${(props) => props.theme.features.transition};
  text-transform: capitalize;
  display: inline-block;

  &:hover {
    background: ${(props) => props.theme.colors.cWhite};
    color: ${(props) => props.theme.colors.cGreen};
    box-shadow: none;
  }
`;

export const HipsterBTN = styled(BaseButton)`
  background: ${(props) => props.theme.colors.cBlack};
  color: ${(props) => props.theme.colors.cGLite};

  &:hover {
    color: ${(props) => props.theme.colors.cBlack};
    background: ${(props) => props.theme.colors.cGLite};
  }
`;
export const BlockBTN = styled(BaseButton)`
  width: 100%;
`;
export const HeroBTN = styled(BaseButton)`
  font-size: 1.25rem;
  padding: 0.5rem 1.25rem;
`;
export const DangerBTN = styled(BaseButton)`
  background: ${(props) => props.theme.colors.redLight};
  color: ${(props) => props.theme.colors.redDark};

  &:hover {
    color: ${(props) => props.theme.colors.redLight};
    background: ${(props) => props.theme.colors.redDark};
  }
`;
