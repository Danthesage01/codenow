import React, { useState } from 'react'
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../../components/Logo/Logo";
import Wrapper from "./BigSidebarStyle";
const BigSidebar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>)
}

export default BigSidebar