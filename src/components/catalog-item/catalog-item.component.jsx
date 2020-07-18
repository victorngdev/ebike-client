import React from "react";

import "./catalog-item.styles.scss";

const CatalogItem = ({ name, price, selected }) => (
    <li className={`sidebar-left-li w-90 ${selected ? "selected" : ""}`}>
        <div className="container p-none">
            <div className="row b-btm-clr">
                <div className="col-xs-9 pl-0 name">{name}</div>
                <div className="col-xs-3 ml-auto pr-0 price">${price}</div>
            </div>
        </div>
    </li>
);

export default CatalogItem;
