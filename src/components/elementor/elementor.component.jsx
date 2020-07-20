import React from "react";

import ElementorBanner from "../elementor-header/elementor-header.component";
import ElementorRow from "../elementor-row/elementor-row.component";
import api from "../../apis/api";

import "./elementor.styles.scss";

class Elementor extends React.Component {
    constructor() {
        super();
        this.state = {
            elementorHeader: null,
            elementors: [],
        };
    }

    componentDidMount() {
        api.get("/elementors").then(response =>
            this.setState({ elementors: response.data }, () => {
                const elementorHeader = this.state.elementors.find(
                    elementor => elementor.imageUrl === null
                );
                this.setState({
                    elementors: this.state.elementors.filter(
                        elementor => elementor.imageUrl !== null
                    ),
                });
                this.setState({ elementorHeader });
            })
        );
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
