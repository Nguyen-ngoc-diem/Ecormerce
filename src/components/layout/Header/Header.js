import React, { Fragment } from "react";
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useState } from 'react';
import { logout } from "../../../actions/userActions";
import "../../../App.css"


const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);
    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully');
    }

    const [showMenu, setShowMenu] = useState(false);

    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className="nav">
                        <div>
                            <FontAwesomeIcon
                                icon="fa-solid fa-bars"
                                className="nav__menu__icon"
                                onClick={() => setShowMenu(!showMenu)}
                            />
                            <NavLink className="nav__logo" to="/">
                                MS STORE
                            </NavLink>
                        </div>
                        <div id="pc_nav_menu" className="nav__menu">
                            <ul>
                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav__item">
                                    <NavLink className="nav__link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {showMenu && (
                            <div className="sidebar__menu">
                                <div
                                    className="sidebar__overlay"
                                    onClick={() => {
                                        setShowMenu(!showMenu);
                                    }}
                                ></div>
                                <div id="small_nav_menu" className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
                                    <NavLink className="sidebar__nav__logo" to="/">
                                        MS STORE
                                    </NavLink>
                                    <ul>
                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/">
                                                Home
                                            </NavLink>
                                        </li>

                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/About">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/login">
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="nav__item">
                                            <NavLink className="nav__link" to="/register">
                                                Register
                                            </NavLink>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        )}

                        <div className="nav__buttons">

                            <Link to="/cart" className="nav__button">
                                <FontAwesomeIcon className="btn__icon" icon="fa-solid fa-cart-arrow-down" />
                                Cart {cartItems.length}
                            </Link>
                            {user ? (
                                <div className="ml-4 dropdown d-inline">
                                    <Link
                                        to="/"
                                        className=" btn dropdown-toggle text-white mr-4"
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
                                        <span className="user_name">{user && user.name}</span>
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
                                    <Link to="/login" className="nav__button" id="login_btn">
                                        <FontAwesomeIcon className="btn__icon" icon="fa-solid fa-right-to-bracket" />
                                        Login
                                    </Link>
                                )
                            )}



                        </div>

                    </div>

                </div>
            </div>



        </Fragment >
    );
};
export default Header;