import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import {
  Div,
  Form,
  Section,
  FormTitle,
  FormText,
  FormLink,
  Info,
} from "./ForgotStyle";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { useAuthGlobalContext } from "../../context/authContext/authContext";

const ForgotPassword = () => {
  const { forgotPassword, userEmail: localUserEmail } = useAuthGlobalContext();

  const [userEmail, setUserEmail] = useState("");

  const [resetPassword, setResetPassword] = useState(false);

  const resetForm = () => {
    setUserEmail({
      userEmail: "",
    });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail === "") {
      toast.warning("Please fill in your email");
      return;
    }

    setResetPassword(true);
    forgotPassword(userEmail);
    resetForm();
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (resetPassword) {
  //       navigate("/sign-in");
  //     }
  //   }, 3000);
  // }, [resetPassword, navigate]);

  return (
    <Div>
      <Logo />
      <Section>
        {resetPassword ? (
          <Info>
            <FormTitle>Check Your Email</FormTitle>
            <FormText>
              We have sent a password reset link to
              <br />
              {console.log(userEmail, "info form")}
              {localUserEmail ? localUserEmail : "Loading..."}.
              <br />
              Please login to the email to reset your password.
            </FormText>
            {/* <FormLink
              to="/sign-in"
              center="true"
            >
              Login
            </FormLink> */}
          </Info>
        ) : (
          <Form>
            <FormTitle>Forgot Password</FormTitle>
            <FormRow
              htmlFor="email"
              labelText="Email"
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required="required"
              autoComplete="false"
            />
            <Button
              type="submit"
              buttonType={BUTTON_TYPE_CLASSES.block}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        )}
      </Section>
    </Div>
  );
};

export default ForgotPassword;
