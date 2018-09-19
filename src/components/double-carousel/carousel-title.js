import React, { Component } from 'react';
import logo from '../../img/icono_sin_fondo.png';

class CarouselTitle extends Component {
   render() {
     return (
       <div className="d-flex flex-row pt-2 pl-2 pt-md-5 pl-md-5">
         <div className="d-flex icon-carousel-title">
           <img alt="Icon" src={logo} className="img-fluid w-100" />
         </div>
         <div className="d-flex align-items-center">
           <h3 className="section-title text-white pl-2 ml-2 text-uppercase">{this.props.title}</h3>
         </div>
       </div>
     )
   }
 }
export default CarouselTitle;