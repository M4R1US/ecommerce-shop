import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux"
import "./cart-icon.styles.scss"
import { toggleCart } from "../../redux/cart/cart.actions.js"

const CartIcon = ( {toggleCart, itemCount} ) => (
 <div className="cart-icon" onClick={toggleCart} >
   <ShoppingIcon className="shopping-icon" />
   <span className="item-count"> {itemCount} </span>
 </div>
);

const mapStateToProps = ({cart: { cartItems }}) => ({
  itemCount: cartItems.reduce((accumulated, cItem) => {
    return accumulated + cItem.quantity
  }
  ,0)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);