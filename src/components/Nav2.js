import React from "react";

export const Nav2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark p-0 shadow nav2 d-none d-lg-block" style={{ backgroundColor: "#00C170" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active px-3" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 active" href="#">
                  Saved Blogs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link px-3 active" href="#">Language</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 active" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav2;
