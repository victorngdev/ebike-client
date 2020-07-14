import React from "react";

import "./product-specification-item.styles.scss";

const ProductSpecificationItem = ({ value, header }) => (
    <div className="col-md-4 p-0 col-sm-12 mt-1 product-specification">
        <div className="h-22">
            <label className="value" id="range">
                {value.toUpperCase()}
            </label>
        </div>
        <div>
            <label className="val-header">{header}</label>
        </div>
    </div>
);

export default ProductSpecificationItem;
