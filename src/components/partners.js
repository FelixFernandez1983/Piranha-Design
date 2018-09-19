import React, { Component } from 'react';
import comcast from '../img/comcast_icon.png';
import macron from '../img/macron_icon.png';
import uefa from '../img/uefa_icon.png';
import berkley from '../img/berkley_icon.png';
import mcgavic from '../img/mcgavic_icon.png';

class PartnerBadge extends Component {
    render () {
        return(
            <div className="d-inline-flex px-2">
                <img alt={this.props.altText} src={this.props.image} className="img-fluid h-100 w-100"/>
            </div> 
        )
    }
}

class Partners extends Component {
    render() {
        return(
            <div className="partners d-flex flex-row py-2 py-sm-3 px-0 px-md-5 my-1 mx-0 mx-md-5">
                <PartnerBadge altText="Comcast badge" image={comcast} />
                <PartnerBadge altText="Macron badge" image={macron} />
                <PartnerBadge altText="Uefa badge" image={uefa} />
                <PartnerBadge altText="Berkley badge" image={berkley} />
                <PartnerBadge altText="Mcgavic badge" image={mcgavic} />
            </div>
        )
    }
}

export default Partners;