import React, { Component } from 'react';

class SocialIcon extends Component {
    render() {
        return(
            <div className="d-flex justify-content-center align-items-center p-2 mr-2 bg-white rounded-circle">
                <i className={this.props.iconClass}/>
            </div>
        )
    }
}

export default SocialIcon;