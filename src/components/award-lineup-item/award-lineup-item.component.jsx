import React from "react";
import { Link } from "react-router-dom";

import "./award-lineup-item.styles.scss";

const AwardLineupItem = ({ name, price, color, characteristic, imageUrl }) => (
    <div className="col-xl-2 col-md-4 col-sm-12 m-0 p-0">
        <div className="product-award-lineup">
            <Link to="/">
                <img src={imageUrl} alt="" className="img-fluid" />
            </Link>
            <p>{color}</p>
            <p>{name}</p>
            <p>${price}</p>
            <p className="product-characteristic">{characteristic}</p>
        </div>
    </div>
);

export default AwardLineupItem;
