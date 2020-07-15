import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./footer.styles.scss";

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            contact: {
                address: "349 Quang Trung",
                phone: "+84 31 738 872",
                email: "cephiroth@gmail.com",
                quote:
                    "We hope that this will be the first of many International recognitions for SONDORS as we continue to inspire, innovate, and perfect our current and future products for tech-minded, adventure-seeking consumers around the world!",
            },
            request: {
                email: "",
                message: "",
            },
        };
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState(
            { request: { ...this.state.request, [name]: value } },
            () => console.log(this.state.request)
        );
    };

    render() {
        const { address, phone, email, quote } = this.state.contact;
        return (
            <footer>
                <div className="footer-main-container">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>{quote}</p>
                            <div className="social">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>Address</h2>
                        <div className="content">
                            <div className="place">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="text">{address}</span>
                            </div>
                            <div className="phone">
                                <span className="fas fa-phone-alt"></span>
                                <span className="text">{phone}</span>
                            </div>
                            <div className="place">
                                <span className="fas fa-envelope"></span>
                                <span className="text">{email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name="email"
                                    type="email"
                                    label="Email"
                                    value={this.state.request.email}
                                    handleChange={this.handleChange}
                                    required
                                />
                                <FormInput
                                    label="Message"
                                    area
                                    name="message"
                                    value={this.state.request.message}
                                    handleChange={this.handleChange}
                                    required
                                    cols="25"
                                    rows="2"
                                />
                                <div className="btn-custom-footer">
                                    <CustomButton>Send</CustomButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container-fluid text-center">
                        <span className="credit">
                            Created By
                            <span className="owner"> Victor Nguyen</span>
                        </span>
                        <span className="far fa-copyright"></span>
                        <span>2020 All rights reserved.</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
