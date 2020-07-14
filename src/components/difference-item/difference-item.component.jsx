import React from "react";

import "./difference-item.styles.scss";

const DifferenceItem = ({ content, imageUrl }) => (
    <div className="col-md-3 col-sm-12 m-0 p-0 text-center">
        <img className="img-fluid" src={imageUrl} alt="diffrence" />
        <p className="diffrence-content">{content}</p>
    </div>
);

export default DifferenceItem;
