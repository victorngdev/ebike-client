import React from "react";

import ElementorBanner from "../elementor-header/elementor-header.component";
import ElementorRow from "../elementor-row/elementor-row.component";
import { ELEMENTOR_HEADER, ELEMENTOR_ROWS } from "./elementor.data";

import "./elementor.styles.scss";

class Elementor extends React.Component {
    constructor() {
        super();
        this.state = {
            elementorHeader: ELEMENTOR_HEADER,
            elementors: ELEMENTOR_ROWS,
        };
    }

    render() {
        const { elementorHeader, elementors } = this.state;
        return (
            <div className="elementor">
                <ElementorBanner elementorHeader={elementorHeader} />
                {elementors.map((elementor, index) => (
                    <ElementorRow
                        key={elementor.id}
                        elementor={elementor}
                        imageRight={index % 2 === 0}
                    />
                ))}
            </div>
        );
    }
}

export default Elementor;
