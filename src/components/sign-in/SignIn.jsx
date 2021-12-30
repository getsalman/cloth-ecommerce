import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomeButton from "../custome-button/CustomeButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
            required
            label="email"
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            required
            label="password"
          />
          <div className="button">
            <CustomeButton type="submit">Sign in</CustomeButton>
            <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
