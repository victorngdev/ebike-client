import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <span className="empty-message">Your cart is empty</span>
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;
