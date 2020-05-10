import React from 'react';
import { Switch, Route,  Redirect } from 'react-router-dom'
import { connect } from "react-redux"

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Notification from "./components/notification/notification.component";

import SignInSignUpPage from "./pages/sign-in-and-sign-up/sing-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import Footer from "./components/footer/footer.component"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { createStructuredSelector } from "reselect";

import './App.css';
class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const message = "This website is still under development and some functionality is not supported yet, keep that in mind while browsing.";
    return (
      <div>
        <Notification message={message}/>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render= {() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
