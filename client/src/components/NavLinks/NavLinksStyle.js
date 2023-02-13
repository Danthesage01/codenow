import styled from "styled-components";

export const NavLinksWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  .nav-link {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.cGrey};
    padding: 1rem 0;
    text-transform: capitalize;
    transition: ${(props) => props.theme.colors.transition};
    transition: ${(props) => props.theme.colors.transition};
  }
  .nav-link:hover {
    color: ${(props) => props.theme.colors.cText};
  }
  .nav-link:hover .icon {
    color: ${(props) => props.theme.colors.cText};
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: ${(props) => props.theme.colors.transition};
  }
  .active {
    color: ${(props) => props.theme.colors.cBlack};
  }
  .active .icon {
    color: ${(props) => props.theme.colors.cBlack};
  }
`;


