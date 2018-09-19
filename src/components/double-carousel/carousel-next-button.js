import React, { Component } from 'react';

class CarouselNextButton extends Component {
   render() {
     return (
       <a href={this.props.link} className="carousel-link carousel-control-next d-flex justify-content-end"
         data-slide="next">
         <div className="bg-orange d-flex justify-content-center align-items-center p-2 p-md-3">
           <span className="carousel-control-next-icon"></span>
         </div>
       </a>
     )
   }
 }
export default CarouselNextButton;