import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./elementor-row.styles.scss";

const ElementorRow = ({
    elementor: { title, content, imageUrl, action },
    imageRight,
}) => (
    <div className="elementor-row">
        <div className="container-fluid p-0">
            <div className="row content-elementor-bg p-0 m-0">
                <div
                    className={`col-md-6 col-sm-12 wiper-space ${
                        imageRight ? "order-md-2" : ""
                    }`}
                >
                    <div className="content-element-header text-left">
                        <h1>{title}</h1>
                    </div>
                    <div className="content-element-content text-left">
                        <p>{content}</p>
                    </div>
                    <div className="content-element-action text-center">
                        <div className="elementor-button-wrapper">
                            <CustomButton>{action}</CustomButton>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mx-0 col-sm-12 p-0">
                    <div
                        className="content-elementor-wiper"
                        style={{
                            background: `url(${imageUrl}) no-repeat center`,
                            backgroundSize: "cover",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    </div>
);

export default ElementorRow;
