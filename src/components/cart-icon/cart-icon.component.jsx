import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartLength } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, cartLength }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <i className="fa fa-shopping-cart"></i>
        <span className={`item-count ${cartLength > 0 ? "show" : ""}`}></span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    cartLength: selectCartLength,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
