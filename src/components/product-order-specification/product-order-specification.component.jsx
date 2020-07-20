import React from "react";

import "./product-order-specification.styles.scss";

const ProductOrderSpecification = ({
    selectedItem: { name, specifications },
}) => (
    <div className="container specification">
        <div className="specification-header">
            <h3>{name}</h3>
            <h1>Specifications</h1>
        </div>
        <div className="row">
            {specifications.map(({ name, value }) => (
                <div key={name} className="col-md-4 col-sm-6 line-seperator">
                    <p className="specification-name">{name}</p>
                    <p className="specification-value">{value}</p>
                </div>
            ))}
        </div>
    </div>
);

export default ProductOrderSpecification;
