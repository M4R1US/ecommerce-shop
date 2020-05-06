import React from 'react';
import  { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux"
import CartIcon  from "../cart-icon/cart-icon.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.styles.scss"

const Header = ({ currentUser }) => (
 <div className="header">
  <Link className="logo-container" to="/">
    <Logo className="logo"/>
  </Link>
   {
     currentUser ? <h2 className="welcome-text">Hi {currentUser.displayName}</h2> : ""
   }
   <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon className="option" />
   </div>
 </div>
);

//allow access the state
const mapStateToProps = (state) =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);