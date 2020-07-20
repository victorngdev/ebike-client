import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../../redux/cart/cart.actions";

import "./product-order.styles.scss";

const ProductOrder = ({ selectedItem, addItem }) => {
    return (
        <section className="section-sfs_feature">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 sfs_featured_titleWrap">
                        <p>{selectedItem.name}</p>
                        <h1>{selectedItem.quote}</h1>
                    </div>
                </div>
                <div className="row featured_product">
                    <div className="col-lg-7 col-md-12">
                        <img src={selectedItem.imageUrl} alt="product" />
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="step">
                            <h3 className="grey">AVAILABLE FOR ONLY</h3>
                            <div className="line"></div>
                            <h2>
                                ${selectedItem.price} <span>Pay in Full</span>
                            </h2>
                            <br />
                            <p>{selectedItem.description}</p>
                            <p>
                                <CustomButton
                                    onClick={() =>
                                        addItem({
                                            id: selectedItem.id,
                                            name: selectedItem.name,
                                            price: selectedItem.price,
                                            imageUrl: selectedItem.imageUrl,
                                        })
                                    }
                                >
                                    Add To Cart
                                </CustomButton>
                                <br />
                                <br />
                                <span
                                    style={{
                                        color: "#5c5c5c",
                                        fontSize: "15px",
                                    }}
                                >
                                    *Additional tax or shipping may be charged
                                    depending on your location
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductOrder);
