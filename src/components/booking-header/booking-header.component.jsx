import React from "react";

import "./booking-header.styles.scss";
import { ReactComponent as MoreArrow } from "../../assets/more-arrow.svg";

const BookingHeader = ({ title }) => (
    <div className="header">
        <div className="title">
            <h3>{title}</h3>
        </div>
    </div>
);

export default BookingHeader;
