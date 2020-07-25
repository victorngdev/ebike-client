import React from "react";

import "./apparel-item.styles.scss";

const ApparelItem = ({ name, producer, price, imageUrl }) => (
    <div className="col-lg-4 col-sm-12 apparel-item">
        <div className="apparel-image">
            <img className="img-fluid" src={imageUrl} alt="apparel" />
            <div className="button">
                <span>Add To Cart</span>
            </div>
        </div>
        <div className="apparel-info">
            <h2>{name}</h2>
            <span className="producer">{producer}</span>
            <p className="price">${price}</p>
        </div>
    </div>
);

export default ApparelItem;
