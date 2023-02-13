import React from "react";
import Logo from "../../components/Logo/Logo";
import student from "../../assets/student.svg";
import {
  Wrapper,
  Title,
  LandingImg,
  Div,
  Text,
  Page,
  Span,
  ButtonWrapper,
} from "./LandingStyles";
import { theme } from "../../themes/defaults";
import { LinkButton } from "../../styles/GlobalComponents";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  const { user } = useAuthGlobalContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <Logo />
        <Page>
          <Div>
            <Title>
              Student <Span>Dashboard</Span>
            </Title>
            <Text>
              Track your student portal and dashboard as you journey to become a
              software developer. Your training requires your full attention and
              with this dashboard you can build and document your activities as
              you learn industry-standard skills from experienced developers and
              product designers. You can login or register here.
            </Text>
            <ButtonWrapper>
              <LinkButton
                to="/sign-in"
                color={theme.colors.cYellow}
                reverse={theme.colors.cGreen}
              >
                Login
              </LinkButton>
              <LinkButton
                to="/sign-up"
                color={theme.colors.cGreen}
                reverse={theme.colors.cYellow}
              >
                Register
              </LinkButton>
            </ButtonWrapper>
          </Div>
          <LandingImg src={student} />
        </Page>
      </Wrapper>
    </React.Fragment>
  );
};

export default LandingPage;
