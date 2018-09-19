import React, { Component } from 'react';
import ButtonArrow from './button-arrow';

class FootbalLeague extends Component {
    render() {
        return (
            <div className="footbalLeagueTV big-bg-image cover-image text-white pr-lg-5">
                <div className="dark-overlay w-100 h-100">
                    <div className="row align-items-center h-100 px-3 px-sm-5 py-5 text-center text-sm-left">
                        <div className="col-12 col-sm-6">
                            <div className="text-uppercase">
                                <h3>Football League TV</h3>
                            </div>
                            <div className="py-2 py-md-3">Visit our Youtube channel to watches matches, highlights and special events</div>
                            <div className="text-uppercase">
                               <ButtonArrow text="Visit our channel" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="embed-responsive embed-responsive-16by9 mt-3 mt-sm-0">
                                <iframe title="Football League TV" className="embed-responsive-item" src="https://www.youtube.com/embed/JW0cwD7Ow0w?rel=0"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FootbalLeague;