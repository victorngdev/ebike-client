import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectHoverItem } from "../../redux/catalog/catalog.selectors";
import { fetchBikeDetails } from "../../redux/catalog/catalog.actions";

import ProductOrder from "../../components/product-order/product-order.component";
import ProductOrderSpecification from "../../components/product-order-specification/product-order-specification.component";

import "./product.styles.scss";

class ProductPage extends React.Component {
    componentDidMount() {
        this.props.fetchBikeDetails(this.props.match.params.bikeId);
    }

    render() {
        const { selectedItem } = this.props;
        return selectedItem &&
            typeof selectedItem.specifications !== "undefined" ? (
            <div className="product-page">
                <ProductOrder selectedItem={selectedItem} />
                <ProductOrderSpecification selectedItem={selectedItem} />
            </div>
        ) : null;
    }
}

const mapStateToProps = createStructuredSelector({
    selectedItem: selectHoverItem,
});

export default withRouter(
    connect(mapStateToProps, { fetchBikeDetails })(ProductPage)
);
