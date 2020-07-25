import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import "./apparel-item.styles.scss";

const ApparelItem = ({ apparelItem, addItem }) => (
    <div className="col-lg-4 col-sm-12 apparel-item">
        <div className="apparel-image">
            <img
                className="img-fluid"
                src={apparelItem.imageUrl}
                alt="apparel"
            />
            <div className="button">
                <span onClick={() => addItem(apparelItem)}>Add To Cart</span>
            </div>
        </div>
        <div className="apparel-info">
            <h2>{apparelItem.name}</h2>
            <span className="producer">{apparelItem.producer}</span>
            <p className="price">${apparelItem.price}</p>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: apparelItem => dispatch(addItemToCart(apparelItem)),
});

export default connect(null, mapDispatchToProps)(ApparelItem);
