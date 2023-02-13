import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: ${(props) => props.theme.colors.cWhite};
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: ${(props) => props.theme.features.transition};
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.cMidGrey};
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: ${(props) => props.theme.features.transition};
    }
    .nav-link:hover {
      background: ${(props) => props.theme.colors.cBackground};
      color: ${(props) => props.theme.colors.cText};
      padding-left: 3rem;
    }
    .nav-link:hover .icon {
      color: ${(props) => props.theme.colors.cText};
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: ${(props) => props.theme.features.transition};
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
