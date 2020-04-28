import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up";

import "./signinandup.styles.scss";

const SignInAndUp = () => (
  <div className="container">
    <SignIn className="sign-in-form" />
    <SignUp />
  </div>
);

export default SignInAndUp;
