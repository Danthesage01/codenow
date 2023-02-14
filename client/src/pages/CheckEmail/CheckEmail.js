import React from "react";
import { HeadThree, Main, Text } from "./CheckEmailStyles";
import Logo from "../../components/Logo/Logo";
const CheckEmail = () => {
  return (
    <>
      <Logo />
      <Main>
        <HeadThree>Please Check Your Email</HeadThree>
        <Text>Click the verification link to verify your account</Text>
      </Main>
    </>
  );
};

export default CheckEmail;
