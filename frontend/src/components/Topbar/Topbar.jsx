import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
   const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topLeft">
        <a href="https://www.facebook.com/eshan.dhok.3/">
          <i className="topIcon fa-brands fa-facebook-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/eshan-d-54263a191/">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/eshan.dhok17/">
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </a>
        <a href="https://github.com/eshanDhok17">
          <i className="topIcon fa-brands fa-github-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="Link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="Link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="Link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="Link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImage" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="Link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="Link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;