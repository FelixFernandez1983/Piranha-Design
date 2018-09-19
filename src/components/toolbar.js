import React, { Component } from 'react';
import SocialIcon from './social-icon';

class Toolbar extends Component {
    render() {
        return(
            <div className="upper-toolbar w-100 bg-dark py-1 small">
            <div className="d-flex flex-row justify-content-between justify-content-md-end h-100 align-items-center">
              <div className="d-flex flex-row">
                <div className="text-uppercase text-white-50 ml-2 ml-md-0 mr-md-5"><i className="fas fa-ticket-alt fa-sm mr-1 mr-md-2"></i>Tickets</div>
                <div className="text-uppercase text-white-50 ml-2 ml-md-0 mr-md-5"><i className="fas fa-shopping-basket fa-sm mr-1 mr-md-2"></i>Shop</div>
                <div className="text-uppercase text-white-50 ml-2 ml-md-0 mr-md-5"><i className="fas fa-microphone fa-sm mr-1 mr-md-2"></i>Media</div>
              </div>
              <div className="d-flex flex-row">
                <SocialIcon iconClass="fab fa-facebook-f fa-sm" />
                <SocialIcon iconClass="fab fa-linkedin-in fa-sm" />
                <SocialIcon iconClass="fab fa-youtube fa-sm" />
                <SocialIcon iconClass="fab fa-instagram fa-sm" />
              </div>
            </div>
          </div>
        )
    }
}

export default Toolbar;