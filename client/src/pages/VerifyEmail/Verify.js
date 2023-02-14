import React, { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { Div, FormTitle, Info, LoginLink, Section, FormText } from "./VerifyStyle";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const { isLoading, verifyEmail, isVerifyLoading, isVerifyError } =
    useAuthGlobalContext();

  const query = useQuery();

  useEffect(() => {
    if (!isLoading) {
      verifyEmail(query);
    }
  }, []);

  if (isVerifyLoading) {
    return (
      <Div>
        <Logo />
        <Section>
          <Info>
            <FormText>Loading...</FormText>
          </Info>
        </Section>
      </Div>
    );
  }
  if (isVerifyError) {
    return (
      <Div>
        <Logo />
        <Section>
          <Info>
            <FormTitle>
              There was an error, please double check your verification link{" "}
            </FormTitle>
          </Info>
        </Section>
      </Div>
    );
  }

  return (
    <Div>
      <Logo />
      <Section>
        <Info>
          <FormTitle>Account Confirmed</FormTitle>
          <LoginLink to="/sign-in">Please login</LoginLink>
        </Info>
      </Section>
    </Div>
  );
};

export default Verify;
