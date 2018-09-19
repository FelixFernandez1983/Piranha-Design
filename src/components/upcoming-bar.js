import React, { Component } from 'react';
import escudo1 from '../img/escudo1.png';
import escudo2 from '../img/escudo2.png';
import ButtonArrow from './button-arrow';

class Upcoming extends Component {
    render() {
        return(
            <div className="upcoming-fixture">
            <div className="d-flex flex-row align-items-center justify-content-center flex-wrap p-3">
              <div className="px-2 d-flex">
                <h3 className="text-white text-uppercase">Upcoming fixture</h3>
              </div>
              <div className="px-2 d-flex">
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex justify-content-center">
                    <img alt="Team badge" src={escudo1} className="img-fluid w-75 h-75"/>
                  </div>
                  <div className="text-white border border-light px-2">
                    V
                  </div>
                  <div className="d-flex justify-content-center">
                    <img alt="Team badge" src={escudo2} className="img-fluid w-75 h-75"/>
                  </div>
                </div>
              </div>
      
              <div className="px-2 text-white">
                <div className="d-flex flex-row">
                  <div className="date-match border-right border-white pr-1">Tuesday 10th June </div>
                  <div className="hour-match pl-1">20:45 </div>
                </div>
                <div className="d-flex flex-row">
                  <div className="teams-match">
                    <h4>Team A v Team B</h4>
                  </div>
                </div>
              </div>
      
              <div className="px-2 d-flex">
                <ButtonArrow text="Ticket Info" />
              </div>
            </div>
          </div>
        )
    }
}

export default Upcoming;