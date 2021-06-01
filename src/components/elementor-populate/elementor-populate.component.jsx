import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./elementor-populate.styles.scss";

class ElementorPopulate extends React.Component {
    state = {
            populate: {
                title: "50,000+ Riders and Counting",
                content:
                    "Join the largest electric bike community in the world.",
                action: "Everybody Loves Sondors",
                imageUrl: "https://i.ibb.co/Ksj7w9y/HERO-2-scaled.jpg",
            },
        };

    render() {
        const { title, content, action, imageUrl } = this.state.populate;
        return (
            <section id="elementor-populate">
                <div className="container-fluid m-0 p-0">
                    <div
                        className="elementor-populate-background"
                        style={{
                            background: `url(${imageUrl}) no-repeat center`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="elementor-populate-content">
                            <h1>{title}</h1>
                            <p>{content}</p>
                            <div className="favourite-content-forward">
                                <CustomButton>{action}</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ElementorPopulate;
