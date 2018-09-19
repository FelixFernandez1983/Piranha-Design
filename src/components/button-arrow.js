import React, { Component } from 'react';

class ButtonArrow extends Component {
   render() {
      return (
         <button className="btn rounded-0 p-0 border-0" type="button">
            <div className="d-flex flex-row align-items-center bg-light">
               <div className="text-uppercase px-2 px-sm-3 py-1 py-sm-2">{this.props.text}</div>
               <div className="bg-orange px-1 py-2 text-light">></div>
            </div>
         </button>
      )
   }
}

export default ButtonArrow;