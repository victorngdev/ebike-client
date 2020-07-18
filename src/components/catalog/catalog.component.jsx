import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProductSpecification from "../../components/product-specification/product-specification.component";
import CatalogItem from "../../components/catalog-item/catalog-item.component";
import {
    selectCollectionsFromCatalog,
    selectHoverItem,
} from "../../redux/catalog/catalog.selectors";
import { getHoverItem } from "../../redux/catalog/catalog.actions";

import "./catalog.styles.scss";

const ProductCatalog = ({ collections, selectedItem, selectItem }) => (
    <div className="product-catalog">
        <div className="header-class">
            <h1>ELECTRIC FOR EVERYONE</h1>
        </div>
        <div className="row m-0">
            <ProductSpecification selectedItem={selectedItem} />
            <aside className="col-md-5 catalog-title">
                <div>
                    <h2 className="sidebar-left-heading">
                        CHOOSE YOUR EDITIONS
                    </h2>
                </div>
                <ul className="custom-ul p-0 w-90">
                    {collections.map(item => (
                        <div key={item.id} onClick={() => selectItem(item)}>
                            <CatalogItem
                                name={item.name}
                                price={item.price}
                                selected={selectedItem.id === item.id}
                            />
                        </div>
                    ))}
                </ul>
                <div className="container p-0 m-0 w-90">
                    <div className="row mt-buy w-90">
                        <div className="col-xs-7">
                            <label className="sidebar-due">DUE TODAY</label>
                        </div>
                        <div className="col-xs-3 pr-0 ml-auto sidebar-due-price">
                            <label className="sidebar-due">
                                ${selectedItem.price}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-90 buy-now">
                    <Link to={`/product/${selectedItem.title}`} className="btn">
                        Buy Now
                    </Link>
                </div>
                <div className="description w-90">
                    <p>
                        Since 2015, SONDORS has made premium electric bikes
                        attainable, and has put 50,000 new riders on the road.
                        Tens of thousands have purchased SONDORS without ever
                        riding one, and now they're obsessed. In 2020, we're on
                        a mission to reach a fleet of 100,000. Join us –
                        ELECTRIC FOR EVERYONE.
                    </p>
                </div>
            </aside>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectItem: item => dispatch(getHoverItem(item)),
});

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsFromCatalog,
    selectedItem: selectHoverItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog);
