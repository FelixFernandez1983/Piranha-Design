import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import logo from './img/icono_sin_fondo.png';

import Navigation from './components/navigation';
import Toolbar from './components/toolbar';
import Carousel from './components/carousel';
import Upcoming from './components/upcoming-bar';
import LatestNews from './components/latest-news';
import DoubleCarousel from './components/double-carousel/double-carousel';
import Tickets from './components/tickets';
import FootballLeague from './components/football-league';
import Partners from './components/partners';
import Footer from './components/footer';


class PiranhaApp extends React.Component {
 
  renderLogo() {
    return (
      <div className="logo">
        <a href="index.html">
          <img alt="Icon" src={logo} className="img-fluid"/>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <Toolbar />        
        <Navigation />
        <Carousel />
        {this.renderLogo()}
        <Upcoming />
        <LatestNews />
        <DoubleCarousel />
        <Tickets />
        <FootballLeague />
        <Partners />
        <Footer />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <PiranhaApp />, document.getElementById('root')
);
  