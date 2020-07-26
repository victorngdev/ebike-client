import React from "react";

import "./booking-item-info.styles.scss";

const BookingItemInfo = ({ title, value }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 booking-item-info">
        <span className="title">{title}</span>
        <p className="value">{value}</p>
    </div>
);

export default BookingItemInfo;
