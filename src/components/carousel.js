import React, { Component } from 'react';
import carousel_image_1 from '../img/image_carousel_1.jpg';
import carousel_image_2 from '../img/image_carousel_2.jpg';
import carousel_image_3 from '../img/image_carousel_3.jpg';

class Carousel extends Component {
    render() {
        return(
            <div className="carousel">
                <div id="football-news-carousel" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#football-news-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#football-news-carousel" data-slide-to="1"></li>
                        <li data-target="#football-news-carousel" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="Football slide" src={carousel_image_1} className="img-fluid w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img alt="Football slide" src={carousel_image_2} className="img-fluid w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img alt="Football slide" src={carousel_image_3} className="img-fluid w-100"/>
                        </div>
                    </div>

                    <a href="#football-news-carousel" className="carousel-control-prev" data-slide="prev"><span className="carousel-control-prev-icon"></span></a>
                    <a href="#football-news-carousel" className="carousel-control-next" data-slide="next"><span className="carousel-control-next-icon"></span></a>
                </div>
                <div className="dropdown position-absolute top-0 right-0">
                    <div className="dropdown-toggle newsletter-signup text-center text-white text-uppercase py-1 py-sm-2 px-2 px-sm-3" data-toggle="dropdown">
                        <i className="far fa-envelope mr-2"></i><span>Newsletter signup</span>
                    </div>
                    <div className="dropdown-menu px-2">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" id="usr"/>
                        <button className="btn btn-info mt-2 float-right">Suscribe</button>
                    </div>
                </div>

                <div className="meet-the-squad bg-light p-3 p-md-4 mb-0 mb-md-5">
                    <h1 className="text-uppercase">Football league</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, illo debitis facere ea quisquam aliquid!
                    </p>
                    <a href="#meet-the-squad" className="text-uppercase font-weight-bold">Meet the squad ></a>
                </div>
            </div>
        )
    }
}

export default Carousel;