import React, { Component } from "react";
import logo from "../img/icono_sin_fondo.png";
import SocialIcon from './social-icon';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="fondo-footer cover-image">
          <div className="row border-bottom border-light p-2 p-sm-3 p-md-5 justify-content-between text-center text-sm-left">
            <div className="col-12 col-sm-4 text-white mt-3">
              <div className="row">
                <div className="col-2 offset-5 col-sm-4 offset-sm-1 p-0">
                  <img alt="Icon" src={logo} className="img-fluid w-100" />
                </div>
                <div className="col-12 mt-2 mt-sm-3">
                  <div className="text-capitalize">
                    Football league, planet football road, Gibraltar
                  </div>
                  <div>Tel: +350 200 12345</div>
                  <div>Fax: +350 200 45678</div>
                  <div>Email: info@footballleague.com</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 text-white mt-2 mt-md-3 d-none d-sm-block">
              <div className="text-orange text-uppercase font-weight-bold mb-1 mb-md-3">
                Quick links
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div>Football league</div>
                  <div>Competitions</div>
                  <div>Governance</div>
                  <div>Grassroots</div>
                  <div>Referees</div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div>Tickets</div>
                  <div>Shop</div>
                  <div>Media</div>
                  <div>Info</div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div>Club licensing</div>
                  <div>Terms and conditions</div>
                  <div>Privacy Statement</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-3 mt-2 mt-md-3">
              <div className="text-orange text-uppercase font-weight-bold mb-1 mb-md-3">
                Follow us
              </div>
              <div className="d-flex flex-row justify-content-center justify-content-sm-start">
                <SocialIcon iconClass="fab fa-facebook-f fa-lg" />
                <SocialIcon iconClass="fab fa-linkedin-in fa-lg" />
                <SocialIcon iconClass="fab fa-youtube fa-lg" />
                <SocialIcon iconClass="fab fa-instagram fa-lg" />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between px-2 px-md-5 py-2 py-md-3 text-white flex-wrap small">
            <div className="text-capitalize mb-2 mb-sm-0 mr-3 mr-sm-0">
              Copyright 2018 football league association
            </div>
            <div>Website design by Piranha Designs</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
