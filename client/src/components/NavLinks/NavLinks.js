import React from "react";
import links from "../../utils/links";
import { NavLink } from "react-router-dom";
import { NavLinksWrapper } from "./NavLinksStyle";


const NavLinks = ({ toggle }) => {
  return (
    <NavLinksWrapper>
      {links.map((link) => {
        const { id, text, path, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            key={id}
            onClick={toggle}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </NavLinksWrapper>
  );
};

export default NavLinks;
