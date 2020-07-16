import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectHoverItem } from "../../redux/catalog/catalog.selectors";

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
                <div key={name} className="col-sm-4 line-seperator">
                    <p className="specification-name">{name}</p>
                    <p className="specification-value">{value}</p>
                </div>
            ))}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    selectedItem: selectHoverItem,
});

export default connect(mapStateToProps)(ProductOrderSpecification);
