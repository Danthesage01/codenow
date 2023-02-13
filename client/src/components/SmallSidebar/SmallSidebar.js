import React, { useState } from "react";
import { Logo } from "../../components";
import { FaTimes } from "react-icons/fa";
import NavLinks from "../NavLinks/NavLinks";
import Wrapper from "./SmallSidebarStyle";
const SmallSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div
        className={
          isOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <div className="header">
            <button
              type="button"
              className="close-btn"
              onClick={toggle}
            >
              <FaTimes />
            </button>
            <header>
            <Logo />
            </header>
          </div>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
