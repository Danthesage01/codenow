import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: ${(props) => props.theme.features.transition};
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: ${(props) => props.theme.colors.cWhite};
    width: ${(props) => props.theme.features.fluidWidth};
    height: 95vh;
    border-radius: ${(props) => props.theme.features.borderRadius};
    padding: 1rem 1rem;
    /* position: relative; */
    /* display: flex;
    align-items: center;
    flex-direction: column; */
  }
  .close-btn {
    /* position: absolute;
    top: 10px;
    left: 10px; */
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.redDark};
    cursor: pointer;
  }
  /* header {
    position: absolute;
    top: 20px;
    padding-left: 2rem;
  } */
  .header{
    display: flex;
    justify-content: space-between;
    gap: 9rem;
  }

`;
export default Wrapper;
