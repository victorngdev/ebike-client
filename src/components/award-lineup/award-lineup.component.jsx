import React from "react";

import api from "../../apis/api";

import AwardLineupItem from "../award-lineup-item/award-lineup-item.component";
import data from "./award.data";

import "./award-lineup.styles.scss";

class AwardLineup extends React.Component {
    state = {
        collections: data,
    };

    render() {
        const { collections } = this.state;
        return (
            <section className="award-lineup">
                <div className="award-lineup-header">
                    <div className="title">
                        <h2>The Award Winning SONDORS Lineup</h2>
                    </div>
                </div>
                <div className="award-lineup-content">
                    <div className="container-fluid m-0 p-0">
                        <div className="row m-0 p-0">
                            {collections.map(({ id, ...otherProps }) => (
                                <AwardLineupItem key={id} {...otherProps} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AwardLineup;
