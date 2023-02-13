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
import { json, useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";

const userEmail = JSON.parse(localStorage.getItem("userEmail"))
console.log(userEmail);
const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;

  const [resetPassword, setResetPassword] = useState(false);

  const navigate = useNavigate();

  const resetForm = () => {
    setFormData({
      email: "",
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
    if (email === "") {
      alert("Please fill in your email");
      return;
    }
    console.log(formData);
    localStorage.setItem("userEmail", JSON.stringify(formData.email))
    setResetPassword(true);
    resetForm();
    // navigate("/sign-in");
  };

  useEffect(() => {
    setTimeout(() => {
      if (resetPassword) {
        navigate("/sign-in");
      }
    }, 3000);
  }, [resetPassword, navigate]);


  
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
              {console.log(formData.email, "info form")}
              {userEmail}.
              <br />
              Please login to the email to reset your password.
            </FormText>
            <FormLink
              to="/sign-in"
            //  center = {theme.features.center}
            //  center = "center"
             center= "true"
            >
              Login 
            </FormLink>
          </Info>
        ) : (
          <Form>
            <FormTitle>Reset Password</FormTitle>
            <FormRow
              htmlFor="email"
              labelText="Email"
              type="email"
              name="email"
              value={email}
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

export default ForgotPassword;
