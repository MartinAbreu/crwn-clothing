import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signinandup/signinandup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
    };
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(
            "Current user logged in: " + this.state.currentUser.displayName
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
        console.log("There is no user logged in.");
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  ifUserSignedIn() {
    if (this.state.currentUser) {
      return this.state.currentUser.displayName;
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
