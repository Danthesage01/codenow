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
} from "./ResetPasswordStyles";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { toast } from "react-toastify";
import { useAuthGlobalContext } from "../../context/authContext/authContext.js";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const {
    isLoading,
    verifyEmail,
    isVerifyLoading,
    isVerifyError,
    resetPassword,
  } = useAuthGlobalContext();

  const query = useQuery();
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });
  const { password, password2 } = formData;

  const [isPassword, setResetPassword] = useState(false);

  const resetForm = () => {
    setFormData({
      password: "",
      password2: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "" || password2 === "") {
      toast.warning("Please fill all fields");
      return;
    }

    if (password !== password2) {
      toast.error("Password do not match");
      return;
    }
    setResetPassword(true);
    resetPassword(query, password);
    resetForm();
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isPassword) {
  //       navigate("/sign-in");
  //     }
  //   }, 3000);
  // }, [isPassword, navigate]);

  return (
    <Div>
      <Logo />
      <Section>
        {isPassword ? (
          <Info>
            <FormTitle>Check Your Email</FormTitle>
            <FormText>
              You have successfully reset your password reset
              <br />
              Please login with your new password.
            </FormText>
            <FormLink
              to="/sign-in"
              center="true"
            >
              Login
            </FormLink>
          </Info>
        ) : (
          <Form>
            <FormTitle>Reset Password</FormTitle>
            <FormRow
              htmlFor="password"
              labelText="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required="required"
              autoComplete="false"
            />
            <FormRow
              htmlFor="password2"
              labelText="Confirm Password"
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
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

export default ResetPassword;
