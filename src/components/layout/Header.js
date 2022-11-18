import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";
import "../../App.css";
import Search from "./Search";
import Cart from './icon/cart.svg' // M
const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);
    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully');
    }
    return (
        <Fragment>
            <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">MSTORE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">
                                HOME
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/products">
                                SHOP
                            </a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                    <div className="col-12 col-md-6 mt-2 mt-md-0">
                        <Search />
                    </div>

                    <ul class="navbar-nav ">
                        <Link to="/cart" style={{ textDecoration: "none" }}>
                            <span id="cart" className="ml-3">
                                <img src={Cart} alt="" width="30" />

                            </span>
                            {/* <span id="cart" className="ml-3">
                          Cart
                       </span> */}
                        </Link>

                        <span className="ml-1" id="cart_count">
                            {cartItems.length}
                        </span>

                        <li class="nav-item">
                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                    <Link
                                        to="/"
                                        className="btn dropdown-toggle text-white mr-4"
                                        type="button"
                                        id="dropDownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <figure className="avatar avatar-nav">
                                            <img
                                                src={user.avatar && user.avatar.url}
                                                alt={user && user.name}
                                                className="rounded-circle"
                                            />
                                        </figure>
                                        <span>{user && user.name}</span>
                                    </Link>

                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropDownMenuButton"
                                    >
                                        {user && user.role === "admin" && (
                                            <Link className="dropdown-item" to="/dashboard">
                                                Dashboard
                                            </Link>

                                        )}
                                        <Link className="dropdown-item" to="/orders/me">
                                            Orders
                                        </Link>
                                        <Link className="dropdown-item" to="/me">
                                            Profile
                                        </Link>
                                        <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                            Log out
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                !loading && (
                                    <Link to="/login" className="btn ml-4" id="login_btn">
                                        Login
                                    </Link>
                                )
                            )}
                        </li>
                    </ul>

                </div>
            </nav>


        </Fragment >
    );
};
export default Header;