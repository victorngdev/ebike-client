import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./elementor-header.styles.scss";

const ElementorBanner = ({ elementorHeader: { title, content, action } }) => (
    <section id="elementor-header">
        <div className="elementor-row elementor-header">
            <div className="container-fluid">
                <div className="elementor-element-header text-center">
                    <h1>{title}</h1>
                </div>
                <div className="elementor-element-content text-center">
                    <p>{content}</p>
                </div>
                <div className="elementor-element-action text-center">
                    <div className="elementor-button-wrapper">
                        <CustomButton>{action}</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ElementorBanner;
