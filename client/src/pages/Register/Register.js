import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import {
  Div,
  Form,
  Section,
  FormTitle,
  FormText,
  FormLink,
} from "./RegisterStyles";
import { useNavigate } from "react-router-dom";
import FormRow from "../../components/FormRow/FormRow";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import { toast } from "react-toastify";
const Register = () => {
  const { user, registerUser, isLoading } = useAuthGlobalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();

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
    resetForm();
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);
  return (
    <Div>
      <Logo />
      <Section>
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
      </Section>
    </Div>
  );
};

export default Register;
