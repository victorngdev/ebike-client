import React from "react";
import { withRouter } from "react-router-dom";

import api from "../../apis/api";
import { SemipolarLoading } from "react-loadingg";

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
        return selectedItem ? (
            <div className="product-page">
                <ProductOrder selectedItem={selectedItem} />
                <ProductOrderSpecification selectedItem={selectedItem} />
            </div>
        ) : (
            <div className="loading">
                <SemipolarLoading />
            </div>
        );
    }
}

export default withRouter(ProductPage);
