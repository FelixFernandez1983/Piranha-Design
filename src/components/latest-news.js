import React, { Component } from 'react';
import new1 from '../img/latest_news_1.png';
import new2 from '../img/latest_news_2.png';
import new3 from '../img/latest_news_3.png';


class NewsDate extends Component {
    render() {
        return (
            <span className="news-date position-absolute left-0 bottom-0 text-white mx-auto text-center p-2 dark-overlay">{this.props.date}</span>
        )
    }
}

class NewsImage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-4 px-5 px-md-4">
                <div className="position-relative">
                    <img alt={this.props.altImage} src={this.props.image} className="img-fluid w-100" />
                    <NewsDate date={this.props.date} />
                </div>
                <div className="mt-md-3">
                    <p className="font-weight-bold">{this.props.title}</p>
                    <p className="text-truncate ">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

class LatestNews extends Component {
    render() {
        return (
            <div className="latest-news w-100 p-4">
                <h3 className="section-title text-uppercase pl-2 ml-4 ml-md-1 ml-lg-2 mb-4">Latest News</h3>
                <div className="row">
                    <NewsImage altImage="Referee" image={new1} title="Football Leagues Referee Manager Coaches European Referees at UEFA's Centre of
                        Referee Excel" description="John Smith - League's Referee Manager Selected as a UEFA Referee Coach at CORE"
                        date="May 8, 2018"/>
                    <NewsImage altImage="Football player" image={new2} title="Play Without Pressure Sessions June 2018" description="Fun filled, free, football sessions for kids are back this June"
                        date="May 8, 2018"/>
                    <NewsImage altImage="League Badge" image={new3} title="Referee Appointments 7th - 16th May" description="This week's senior football refereeing appointments"
                        date="May 7, 2018"/>
                </div>
                <a href="#read-more-news" className="text-uppercase font-weight-bold d-flex justify-content-end ">Read more news ></a>
            </div>
        )
    }
}

export default LatestNews;