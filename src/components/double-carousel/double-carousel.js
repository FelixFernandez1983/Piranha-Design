import React, { Component } from 'react';
import CarouselTitle from './carousel-title'
import matches from './matches.json';
import CarouselNextButton from './carousel-next-button';

class Match extends Component {
  render () {  
    if (this.props.idName === "upcoming-carousel") {
      return(
        <div className={this.props.hasBorders}>
          <div className="px-1 py-3 px-md-5 py-md-3">
            <div className="d-flex flex-row mb-2 flex-nowrap">
              <div className="border-right border-white pr-1">{this.props.data.date} </div>
              <div className="pl-1">{this.props.data.hour}</div>
            </div>
            <div className="text-uppercase font-weight-bold d-inline-block d-sm-block">{this.props.data.team1}</div>
            <div className=" d-inline-block d-sm-block">VS</div>
            <div className="text-uppercase font-weight-bold d-inline-block d-sm-block">{this.props.data.team2}</div>
          </div>
        </div>
      )
    } else if (this.props.idName === "latest-carousel"){
      return(
        <div className={this.props.hasBorders}>
          <div className="p-1 py-3 px-md-5 py-md-3">
            <div className="d-flex flex-row mb-2 flex-nowrap">
              <div className="border-right border-white pr-1">{this.props.data.date}</div>
              <div className="pl-1">{this.props.data.hour}</div>
            </div>
            <div className="d-inline-block d-sm-block text-uppercase font-weight-bold">{this.props.data.team1.name}<span className="text-orange ml-2">{this.props.data.team1.score}</span></div>
            <span className="px-2 d-sm-none">-</span>
            <div className="d-inline-block d-sm-block text-uppercase font-weight-bold">{this.props.data.team2.name}<span className="text-orange ml-2">{this.props.data.team2.score}</span></div>
            <div className="text-uppercase text-orange mt-3  font-weight-bold">Match report ></div>
          </div>
        </div>
      )
    }
  }
}

class Slide extends Component {
  render () {

    const slide = this.props.slide.map((match, i) => {
      let hasBorders = i === 1 ? 'col-12 col-sm-4 border-sm-right border-sm-left border-light' : 'col-12 col-sm-4';

      return (
        <Match key={i} hasBorders={hasBorders} data={match} idName={this.props.idName}/>
      )
    })

    return(
      <div className={this.props.isActive}>
        <div className="row carousel1-body text-white justify-content-center py-2 py-md-3 pr-sm-5 pl-3 pl-sm-1">
          {slide}
        </div>
      </div>
    )
  }
}

class Carousel extends Component {
  render() {
    let border = this.props.border === "top" ? 'border-top border-light' : 'border-bottom border-light pb-sm-3';
    let slideArray = [];
    for (var property in this.props.matches){
      slideArray.push(this.props.matches[property]);
    }

    const carousel = slideArray.map((slide, i) => {
      let isActive = i === 0 ? "carousel-item active" : "carousel-item"
      return (
        <Slide key={i} slide={slide} isActive={isActive} idName={this.props.idName}/>
      )
    })
    
    return(
      <div className={border}>
        <CarouselTitle title={this.props.carouselTitle} />

        <div id={this.props.idName} className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner mb-md-4">
            {carousel}
          </div>
          <CarouselNextButton link={this.props.link} />
        </div>
      </div>
    ) 
  }

}

class DoubleCarousel extends Component {

  constructor() {
    super();
    this.state = {
      upcoming: matches.upcoming,
      latest: matches.latest
    }
  }

  render() {
    return (
      <div className="big-bg-image cover-image">
        <div className="w-100 h-100 dark-overlay">
          {/* Carousel 1: Upcoming Domestic Fixtures */}
          <Carousel idName="upcoming-carousel" link="#upcoming-carousel" matches={this.state.upcoming}
            carouselTitle="Upcoming domestic fixtures" border="top"/>

          {/* Carousel 2: Latest Domestic Results */}
          <Carousel idName="latest-carousel" link="#latest-carousel" matches={this.state.latest}
            carouselTitle="Latest Domestic Results" border="top"/>
        </div>
      </div>
    )
  }
}

export default DoubleCarousel;