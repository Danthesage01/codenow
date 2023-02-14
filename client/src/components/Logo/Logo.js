import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Img } from "./LogoStyle";
import { Nav } from "./LogoStyle";
const Logo = () => {
  return (
    <Nav>
    <Link to="/">
      <Img src={logo} />
    </Link>
    </Nav>
  );
};

export default Logo;
