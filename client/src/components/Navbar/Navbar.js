import React from "react";
import Wrapper from "./NavbarStyle";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import { useAuthGlobalContext } from "../../context/authContext/authContext";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, user, toggleSidebar } =
    useAuthGlobalContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
        <div className="logo">
          <Logo />
        </div>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
          {user?.name}
            <FaCaretDown />
          </button>
          {showLogout && (
            <div className="dropdown show-dropdown">
              <button
                type="button"
                className="dropdown-btn"
                onClick={logoutUser}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
