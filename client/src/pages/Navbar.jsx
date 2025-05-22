import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import logo from "../imgs/logo.png";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth?.user);
  const token = user?.token;

  const visibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="header">
      <div className="home">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="subHome1">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/contact">
            Contact Us
          </NavLink>
          {token ? (
            <>
              <NavLink className="navlink" to="/logout">
                Logout
              </NavLink>
              <NavLink className="navlink" to="/cart">
                Cart <small>{cartItems.length}</small>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/login">
                Login
              </NavLink>
              <NavLink className="navlink" to="/signup">
                Register
              </NavLink>
            </>
          )}
        </div>

        <div className="menuDiv">
          <div className="menuIcon" onClick={visibility}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </div>
          <div className="menu" style={{ display: visible ? "flex" : "none" }}>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
            <NavLink className="navlink" to="/contact">
              Contact Us
            </NavLink>
            {token ? (
              <>
                <NavLink className="navlink" to="/logout">
                  Logout
                </NavLink>
                <NavLink className="navlink" to="/cart">
                  Cart <small>{cartItems.length}</small>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="navlink" to="/login">
                  Login
                </NavLink>
                <NavLink className="navlink" to="/signup">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
