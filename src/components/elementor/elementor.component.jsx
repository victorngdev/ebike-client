import React from "react";

import ElementorBanner from "../elementor-header/elementor-header.component";
import ElementorRow from "../elementor-row/elementor-row.component";

import "./elementor.styles.scss";
import data from "./elementor.data";

class Elementor extends React.Component {
        state = {
            elementorHeader: null,
            elementors: [],
        };

    componentDidMount() {
        this.setState({
            elementorHeader: data[4],
            elementors: data.filter(e=> typeof e.imageUrl !== "undefined")
        });
    }

    render() {
        const { elementorHeader, elementors } = this.state;
        return elementorHeader && elementors.length ? (
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
        ) : null;
    }
}

export default Elementor;
