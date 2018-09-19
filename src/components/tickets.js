import React, { Component } from 'react';
import tickets from '../img/tickets.jpg';
import competitions from '../img/competitions.jpg';
import grassroots from '../img/grassroots.jpg';

class TicketsImage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-4 px-5 px-md-3 mb-5 mb-md-3">
                <div className="tickets-container">
                    <img alt={this.props.altImage} src={this.props.image} className="img-fluid w-100" />
                </div>
                <div className="tickets-description text-center mt-3">
                    <h4 className="text-uppercase font-weight-bold text-dark">{this.props.title}</h4>
                    <p className="text-dark ">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

class Tickets extends Component {
    render() {
        return (
            <div className="tickets-section p-2 p-sm-4 pt-5 fondo-tickets cover-image">
                <div className="row">
                    <TicketsImage altImage="Football fans" image={tickets} title="Tickets" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente obcaecati
                        maiores." />
                    <TicketsImage altImage="Boy" image={competitions} title="Competitions" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente obcaecati
                        maiores." />
                    <TicketsImage altImage="Children" image={grassroots} title="Grassroots" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente obcaecati
                        maiores." />
                </div>
            </div>
        )
    }
}

export default Tickets;