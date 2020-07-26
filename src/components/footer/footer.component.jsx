import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import api from "../../apis/api";

import "./footer.styles.scss";

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {
            contact: null,
            request: {
                phone: "",
                message: "",
            },
        };
    }

    componentDidMount() {
        api.get("/abouts").then(response =>
            this.setState({ contact: response.data })
        );
    }

    handleSubmit = event => {
        const { phone, message } = this.state.request;
        event.preventDefault();
        api.post("/contacts", {
            phone: phone,
            message: message,
        }).then(response => console.log(response.data));
        this.setState({ request: { phone: "", message: "" } });
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ request: { ...this.state.request, [name]: value } });
    };

    render() {
        const { contact } = this.state;
        return contact ? (
            <footer>
                <div className="footer-main-container">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>{contact.quote}</p>
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
                                <span className="text">{contact.address}</span>
                            </div>
                            <div className="phone">
                                <span className="fas fa-phone-alt"></span>
                                <span className="text">{contact.phone}</span>
                            </div>
                            <div className="place">
                                <span className="fas fa-envelope"></span>
                                <span className="text">{contact.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name="phone"
                                    type="text"
                                    label="Phone"
                                    maxLength="11"
                                    value={this.state.request.phone}
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
                                    <CustomButton onClick={this.handleSubmit}>
                                        Send
                                    </CustomButton>
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
        ) : null;
    }
}

export default Footer;
