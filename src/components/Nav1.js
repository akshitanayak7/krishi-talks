import React from 'react'

export const Nav1 = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 shadow nav1">
        <div className="container-fluid">
          <a className="navbar-brand text-bold" href="#">
            <img src='./images/logo.jpeg' alt='logo' height={35}/>
          </a>
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
                <a className="nav-link active px-4" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#">
                  Blogs
                </a>
              </li>

              <li classNameName="nav-item">
                <a className="nav-link px-4" href='#'>Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href='#'>shop</a>
              </li>

              <hr className='d-lg-none d-md-block d-sm-block'/>

              <li className="nav-item d-lg-none d-md-block d-sm-block">
                <a className="nav-link active px-3" aria-current="page" href="#">
                  Blogs Home
                </a>
              </li>
              <li className="nav-item d-lg-none d-md-block d-sm-block">
                <a className="nav-link px-3 active" href="#">
                  Saved Blogs
                </a>
              </li>
              <li className="nav-item d-lg-none d-md-block d-sm-block">
                <a className="nav-link px-3 active" href="#">Language</a>
              </li>
              <li className="nav-item d-lg-none d-md-block d-sm-block">
                <a className="nav-link px-3 active" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav1
