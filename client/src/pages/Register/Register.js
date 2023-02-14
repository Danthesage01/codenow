import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import {
  Div,
  Form,
  Section,
  FormTitle,
  FormText,
  FormLink,
  Info
} from "./RegisterStyles";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { toast } from "react-toastify";
const Register = () => {
  const { user, registerUser, isLoading,  } = useAuthGlobalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const [isVerifyEmail, setIsVerifiedEmail] = useState(false);
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
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
    if (name === "" || email === "" || password === "" || password2 === "") {
      toast.warning("Please fill in all fields");
      return;
    }

    if (password !== password2) {
      toast.error("Password do not match");
      return;
    }

    const currentUser = { name, email, password };
    registerUser(currentUser);
    setIsVerifiedEmail(true)
    if (user) {
      resetForm();
    }
  };

  return (
    <Div>
      <Logo />
      <Section>
        {user && isVerifyEmail? (
          <Info>
            <FormTitle>Check Your Email</FormTitle>
            <FormText>
              We have sent an email confirmation link to
              <br />
              {user ? user?.email : "Loading..."}
              <br />
              Please login to the email to confirm.
            </FormText>
          </Info>
        ) : (
          <Form>
            <FormTitle>Register</FormTitle>
            <FormRow
              htmlFor="name"
              labelText="Name"
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
              required="required"
              autoComplete="false"
            />
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
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </Button>
            <FormText>
              Already registered? <FormLink to="/sign-in">Login</FormLink>
            </FormText>
          </Form>
        )}
      </Section>
    </Div>
  );
};

export default Register;
