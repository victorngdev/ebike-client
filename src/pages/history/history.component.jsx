import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { SemipolarLoading } from "react-loadingg";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectOrders } from "../../redux/cart/cart.selectors";
import { initOrders } from "../../redux/cart/cart.actions";

import BookingItem from "../../components/booking-item/booking-item.component";

import "./history.styles.scss";

class History extends React.Component {
    componentDidMount() {
        if (this.props.currentUser === null) return <Redirect to="/" />;
        this.props.initOrders(this.props.currentUser.id);
    }

    render() {
        const { orders } = this.props;
        return orders.length ? (
            <div className="container">
                <div className="history-page">
                    <div className="header">
                        <div className="title">
                            <h3>Your orders</h3>
                        </div>
                    </div>
                    <div className="order">
                        {orders.map(order => (
                            <BookingItem key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="loading">
                <SemipolarLoading />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    orders: selectOrders,
});

export default connect(mapStateToProps, { initOrders })(History);
