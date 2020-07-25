import React from "react";
import { connect } from "react-redux";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, isBike, clearItem, addItem, removeItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <div className="resize">
                    <img src={imageUrl} alt="item" />
                </div>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(id, isBike)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div
                    className="arrow"
                    onClick={() => addItem(cartItem, isBike)}
                >
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div
                className="remove-button"
                onClick={() => clearItem(id, isBike)}
            >
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: (itemId, isBike) => dispatch(clearItemFromCart(itemId, isBike)),
    addItem: (item, isBike) => dispatch(addItemToCart(item, isBike)),
    removeItem: (itemId, isBike) =>
        dispatch(removeItemFromCart(itemId, isBike)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
