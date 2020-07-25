import React from "react";
import { useState, useEffect } from "react";
import { SemipolarLoading } from "react-loadingg";

import api from "../../apis/api";

import ApparelItem from "../../components/apparel-item/apparel-item.component";

import "./apparel.styles.scss";

const Apparel = () => {
    const [apparels, setApparels] = useState([]);

    useEffect(() => {
        let mounted = true;
        api.get("/apparels").then(response => {
            if (mounted) {
                setApparels(response.data);
            }
        });

        return function cleanup() {
            mounted = false;
        };
    }, []);

    return (
        <div className="container-fluid apparel-line">
            {apparels.length ? (
                <div className="apparel-page">
                    <div className="apparel-banner">
                        <div className="image">
                            <img
                                src="https://i.ibb.co/K7fTpCW/apparel-banner.webp"
                                alt="banner"
                            />
                        </div>
                        <div className="apparel-header">
                            <h1>APPAREL AND GEAR</h1>
                        </div>
                    </div>
                    <div className="apparel-collections">
                        <div className="row">
                            {apparels.map(({ id, ...otherProps }) => (
                                <ApparelItem key={id} {...otherProps} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="loading">
                    <SemipolarLoading />
                </div>
            )}
        </div>
    );
};

export default Apparel;
