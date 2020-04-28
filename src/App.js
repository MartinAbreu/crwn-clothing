import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signinandup/signinandup.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUsers: "",
    };
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({ currentUsers: user });
      console.log(user);
      console.log(this.state.currentUsers.displayName);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  ifUserSignedIn() {
    if (this.state.currentUsers) {
      return this.state.currentUsers.displayName;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <Header user={this.ifUserSignedIn()} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
