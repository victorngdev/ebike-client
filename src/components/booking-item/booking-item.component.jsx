import React from "react";

import BookingItemInfo from "../booking-item-info/booking-item-info.component";
import CheckoutItem from "../checkout-item/checkout-item.component";
import FormInput from "../form-input/form-input.component";

import "./booking-item.styles.scss";
import { ReactComponent as MoreArrow } from "../../assets/more-arrow.svg";

class BookingItem extends React.Component {
    renderModal = ({
        bikes,
        apparels,
        id,
        customerName,
        phone,
        customerEmail,
        customerAddress,
        note,
    }) => {
        return (
            <div
                className="modal fade"
                id="staticBackdrop"
                data-backdrop="static"
                data-keyboard="false"
                role="dialog"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                            >
                                Your order details
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {bikes.map(bike => (
                                <CheckoutItem
                                    key={bike.id}
                                    cartItem={bike}
                                    isBike
                                    isOrder
                                    orderId={id}
                                />
                            ))}
                            {apparels.map(apparel => (
                                <CheckoutItem
                                    key={apparel.id}
                                    cartItem={apparel}
                                    isOrder
                                    orderId={id}
                                />
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    renderHeader = order => (
        <div className="perfume-status px-4">
            <div className="product-name">
                <div className="title">
                    <h3>{order.customerName}</h3>
                    <div className={`status ${order.status.toLowerCase()}`}>
                        <p>{order.status}</p>
                    </div>
                </div>
                <div className="action">
                    <span
                        type="button"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                    >
                        View all order items
                    </span>
                    <MoreArrow />
                </div>
            </div>
        </div>
    );

    renderOrderInfo = order => (
        <div className="row booking-info m-0 px-4">
            <BookingItemInfo title="Address:" value={order.customerAddress} />
            <BookingItemInfo title="Order Date:" value={order.orderDate} />
            <BookingItemInfo title="Email:" value={order.customerEmail} />
            <BookingItemInfo title="Total:" value={order.total} />
            <BookingItemInfo title="Phone" value={order.phone} />
            <BookingItemInfo title="Note: " value={order.note} />
        </div>
    );

    render() {
        const { order } = this.props;
        return (
            <div className="booking-item col-12">
                <div className="booking-header">
                    {this.renderHeader(order)}
                    {this.renderOrderInfo(order)}
                </div>
                {this.renderModal(order)}
            </div>
        );
    }
}

export default BookingItem;
