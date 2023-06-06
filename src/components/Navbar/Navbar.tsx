/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Navbar.css";
import navLogo from "./asset/navLogo.png";
import RegisterModal from "../Auth/Register/Register";
import LoginModal from "../Auth/Login/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import useCookies from "react-cookie/cjs/useCookies";

const Navbar = () => {
  const [cookie, _, removeCookie] = useCookies(["username", "token"]);

  const handleLogout = () => {
    removeCookie("username", { path: "/" });
    removeCookie("token", { path: "/" });
    window.alert("Logout avvenuto con successo");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark nav-background">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand abs">
          <img
            src={navLogo}
            alt="star wars logo"
            height={100}
            style={{ filter: "invert(1)" }}
          />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapseNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/characters">
                <button type="button" className="btn btn-outline-warning">
                  <FontAwesomeIcon icon={faGithub} className="ml-1" />
                  <span style={{ marginLeft: "0.5rem" }}>Go GitHub Repo</span>
                </button>
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="https://github.com/ZeroWk-EM/Stardust-Server"
              >
                <button type="button" className="btn btn-outline-warning">
                  <FontAwesomeIcon icon={faServer} />
                  <span style={{ marginLeft: "0.5rem" }}>Go To Back-end</span>
                </button>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {!cookie.username ? (
                <a
                  type="button"
                  className="nav-link"
                  data-bs-target="#registerModal"
                  data-bs-toggle="modal"
                  style={{ cursor: "pointer" }}
                >
                  Register
                </a>
              ) : (
                <a className="nav-link" style={{ textDecoration: "underline" }}>
                  {cookie.username}
                </a>
              )}
            </li>
            <li className="nav-item">
              {!cookie.username ? (
                <a
                  className="nav-link"
                  data-bs-target="#loginModal"
                  data-bs-toggle="modal"
                  style={{ cursor: "pointer" }}
                >
                  Login
                </a>
              ) : (
                <a
                  style={{ cursor: "pointer" }}
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
      <RegisterModal />
      <LoginModal />
    </nav>
  );
};

export default Navbar;
