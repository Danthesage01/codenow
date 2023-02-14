import React from "react";
import logo from "../../assets/logo.png";
import { Img } from "./LogoStyle";
import { Nav } from "./LogoStyle";
const Logo = () => {
  return (
    <Nav>
      <Img src={logo} />
    </Nav>
  );
};

export default Logo;
