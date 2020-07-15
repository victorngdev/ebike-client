import React from "react";

import "./way-get-bike.styles.scss";

const WayToGetBike = () => (
    <section className="way-get-bike">
        <div className="container-fluid m-0 p-0">
            <div className="way-get-bike-header">
                <div className="title">
                    <h2>Three Ways to Get Your Dream SONDORS</h2>
                </div>
            </div>
            <div className="way-get-bike-content p-0">
                <div className="row m-0 p-0">
                    <div className="col-md-4 col-sm-12 text-center">
                        <h2>LAYAWAY</h2>
                        <p>$299 Deposit</p>
                        <p>
                            Reserve your SONDORS with only $299 down using
                            SONDORS FlexPay.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <h2>FINANCE</h2>
                        <p>With Credit</p>
                        <p>
                            Get your dream SONDORS now, with no interest if paid
                            in full in 6 months.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                        <h2>PAY IN FULL</h2>
                        <p>Starting at $1199</p>
                        <p>
                            Pay in full, get your SONDORS now and ride off into
                            the sunset.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default WayToGetBike;
