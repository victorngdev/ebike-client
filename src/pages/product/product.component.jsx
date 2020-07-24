import React from "react";
import { withRouter } from "react-router-dom";

import api from "../../apis/api";

import ProductOrder from "../../components/product-order/product-order.component";
import ProductOrderSpecification from "../../components/product-order-specification/product-order-specification.component";

import "./product.styles.scss";

class ProductPage extends React.Component {
    state = {
        selectedItem: null,
    };

    componentDidMount() {
        api.get(`/bikes/${this.props.match.params.bikeId}`).then(response =>
            this.setState({ selectedItem: response.data })
        );
    }

    render() {
        const { selectedItem } = this.state;
        return selectedItem &&
            typeof selectedItem.specifications !== "undefined" ? (
            <div className="product-page">
                <ProductOrder selectedItem={selectedItem} />
                <ProductOrderSpecification selectedItem={selectedItem} />
            </div>
        ) : null;
    }
}

export default withRouter(ProductPage);
