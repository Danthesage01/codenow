import React from "react";
import { Logo } from "../../components";
import { FaTimes } from "react-icons/fa";
import NavLinks from "../NavLinks/NavLinks";
import Wrapper from "./SmallSidebarStyle";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
const SmallSidebar = () => {
const { isSidebarToggle, toggleSidebar } = useAuthGlobalContext();



  return (
    <Wrapper>
      <div
        className={
          isSidebarToggle
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <div className="content">
          <div className="header">
            <button
              type="button"
              className="close-btn"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
          </div>
          <NavLinks toggle={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
