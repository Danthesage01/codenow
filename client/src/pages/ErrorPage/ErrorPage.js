import React from "react";
import img from "../../assets/not-found.png";
import { Logo } from "../../components";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { Main, ErrorLink, Div, HeadThree, Image, Text } from "./ErrorPageStyle";
const Error = () => {
  const { user } = useAuthGlobalContext();
  return (
    <>
      <Logo />
      <Main>
        <Div>
          <Image
            src={img}
            alt="not-found"
          />
          <HeadThree>Oooh! Page Not found</HeadThree>
          <Text>Kindly navigate back home. You sent a bad request.</Text>
          <ErrorLink to={user ? "/" : "/welcome"}>Back Home</ErrorLink>
        </Div>
      </Main>
    </>
  );
};

export default Error;
