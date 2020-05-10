import React from 'react';
import CustomButton from "../custom-buttom/custom-button.component";
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect";

import "./cart-dropdown.styles.scss"

const CartDropdown = ({ cartItems }) => {
  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => (
            <CartItem key={item.id} item={item}/>
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);