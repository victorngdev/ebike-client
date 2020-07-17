import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import Logo from "../../assets/logo-white.webp";

const Header = ({ currentUser }) => (
    <div className="header">
        <nav className="container navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Shop
                        </Link>
                    </li>
                    {currentUser ? (
                        <li className="nav-item">
                            <div
                                className="nav-link"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Link className="nav-link" to="/authentication">
                                Sign In
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <CartIcon />
        </nav>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
