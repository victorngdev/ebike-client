import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
    selectBikeItems,
    selectApparelItems,
    selectCartLength,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({
    bikeItems,
    apparelItems,
    cartLength,
    history,
    dispatch,
}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {bikeItems.map(({ id, ...otherItemProps }) => (
                <CartItem key={id} {...otherItemProps} />
            ))}
            {apparelItems.map(({ id, ...otherProps }) => (
                <CartItem key={id} {...otherProps} />
            ))}
            {!cartLength ? (
                <span className="empty-message">Your cart is empty</span>
            ) : null}
        </div>
        <CustomButton
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}
        >
            CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    bikeItems: selectBikeItems,
    cartLength: selectCartLength,
    apparelItems: selectApparelItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
