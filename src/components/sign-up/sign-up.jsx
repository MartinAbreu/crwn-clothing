import React from "react";
import FormInput from "../form-input/forminput";
import CustomButton from "../custom-button/custom-button";

import "./sign-up.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ displayName: "", email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h1>I don't have an account</h1>
        <span>Sign up now with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" value="Submit Form">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
