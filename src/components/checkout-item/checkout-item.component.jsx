import React from "react";
import { connect } from "react-redux";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
    cartItem,
    isBike,
    isOrder,
    orderId,
    clearItem,
    addItem,
    removeItem,
    status,
}) => {
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
                {status ? (
                    <div
                        className="arrow"
                        onClick={() => removeItem(id, isBike, isOrder, orderId)}
                    >
                        &#10094;
                    </div>
                ) : null}
                <span className="value">{quantity}</span>
                {status ? (
                    <div
                        className="arrow"
                        onClick={() =>
                            addItem(cartItem, isBike, isOrder, orderId)
                        }
                    >
                        &#10095;
                    </div>
                ) : null}
            </span>
            <span className="price">{price}</span>
            {status ? (
                <div
                    className="remove-button"
                    onClick={() => clearItem(id, isBike, isOrder, orderId)}
                >
                    &#10005;
                </div>
            ) : null}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: (itemId, isBike, isOrder, orderId) =>
        dispatch(clearItemFromCart(itemId, isBike, isOrder, orderId)),
    addItem: (item, isBike, isOrder, orderId) =>
        dispatch(addItemToCart(item, isBike, isOrder, orderId)),
    removeItem: (itemId, isBike, isOrder, orderId) =>
        dispatch(removeItemFromCart(itemId, isBike, isOrder, orderId)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
