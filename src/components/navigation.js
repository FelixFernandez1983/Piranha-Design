import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md border border-dark navbar-light font-weight-bold">
            <button className="navbar-toggler border border-dark" aria-pressed="true" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon custom-toggler"></span>
            </button>
            <ul className="navbar-nav d-md-flex order-md-2">
              <span className="navbar-separator d-none d-md-block"></span>
              <li className="nav-item">
                <a href="#search" className="nav-link text-dark"><i className="fas fa-search"></i></a>
              </li>
            </ul>
            <div className="collapse navbar-collapse d-md-flex order-md-1 " id="navbarCollapse">
              <ul className="navbar-nav justify-content-end w-100 text-uppercase">
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#country" className="nav-link text-dark">Country</a>
                </li>
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#competitions" className="nav-link text-dark">Competitions</a>
                </li>
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#governance" className="nav-link text-dark">Governance</a>
                </li>
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#grassroots" className="nav-link text-dark">Grassroots</a>
                </li>
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#referees" className="nav-link text-dark">Referees</a>
                </li>
                <span className="navbar-separator d-none d-md-block"></span>
                <li className="nav-item">
                  <a href="#about" className="nav-link text-dark">About</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Navigation;