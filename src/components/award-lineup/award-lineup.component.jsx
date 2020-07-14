import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsFromCatalog } from "../../redux/catalog/catalog.selectors";
import AwardLineupItem from "../award-lineup-item/award-lineup-item.component";

import "./award-lineup.styles.scss";

const AwardLineup = ({ collections }) => (
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

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsFromCatalog,
});

export default connect(mapStateToProps)(AwardLineup);
