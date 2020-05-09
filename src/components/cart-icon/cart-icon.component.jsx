import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux"
import { toggleCart } from "../../redux/cart/cart.actions.js"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

import "./cart-icon.styles.scss"


const CartIcon = ( {toggleCart, itemCount} ) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count"> {itemCount} </span>
    </div>
  )
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);