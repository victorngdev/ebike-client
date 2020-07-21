import React from "react";

import "./dropdown.styles.scss";

const Dropdown = ({ handleChange, label, options }) => (
    <div className="dropdown-container">
        <h2>City</h2>
        <div className="box">
            <select name={label} onChange={handleChange}>
                {options.map(option => (
                    <option value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    </div>
);

export default Dropdown;
