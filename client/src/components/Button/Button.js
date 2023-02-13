import React from "react";
import {
  BaseButton,
  HipsterBTN,
  BlockBTN,
  DangerBTN,
  HeroBTN,
} from "./ButtonStyle.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  hipster: "hipter",
  block: "block",
  danger: "danger",
  hero: "hero",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.hipster]: HipsterBTN,
    [BUTTON_TYPE_CLASSES.hero]: HeroBTN,
    [BUTTON_TYPE_CLASSES.block]: BlockBTN,
    [BUTTON_TYPE_CLASSES.danger]: DangerBTN,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
