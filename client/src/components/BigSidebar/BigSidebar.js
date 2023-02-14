import React from 'react'
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../../components/Logo/Logo";
import Wrapper from "./BigSidebarStyle";
import { useAuthGlobalContext } from '../../context/authContext/authContext';
const BigSidebar = () => {
const { isSidebarToggle } = useAuthGlobalContext();
  return (
    <Wrapper>
      <div
        className={
          isSidebarToggle
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar