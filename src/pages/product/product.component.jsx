import React from "react";

import ProductOrder from "../../components/product-order/product-order.component";
import ProductOrderSpecification from "../../components/product-order-specification/product-order-specification.component";

import "./product.styles.scss";

const ProductPage = () => (
    <div className="product-page">
        <ProductOrder />
        <ProductOrderSpecification />
    </div>
);

export default ProductPage;
