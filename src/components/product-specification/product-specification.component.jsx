import React from "react";
import { Link } from "react-router-dom";

import ProductSpecificationItem from "../product-specification-item/product-specification-item.component";

import "./product-specification.styles.scss";

const ProductSpecification = ({
    selectedItem: { imageUrl, range, motor, speed },
}) => (
    <div className="col-md-7 mb-xs-24">
        <article>
            <Link to="/" className="product-image">
                <img src={imageUrl} alt="" className="img-fluid" />
            </Link>
        </article>
        <div className="container mt-4 bottom-content text-center">
            <div className="row w-box">
                <ProductSpecificationItem
                    key="value"
                    value={range}
                    header="Range"
                />
                <ProductSpecificationItem
                    key="motor"
                    value={motor}
                    header="Motor"
                />
                <ProductSpecificationItem
                    key="towing"
                    value={speed}
                    header="Speed"
                />
            </div>
        </div>
    </div>
);

export default ProductSpecification;
