import React, { Component } from 'react';
import "./homepage.css"
import "../../global.css"
import {Animated} from "react-animated-css";

class HomePage extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <div className="home-shape" />
        <div className="home-page">

<Animated
animationIn="bounceInLeft" animationOut="fadeOut"
animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
          <div className="home-text">
            <img className="logo" src="/assets/logo.png" />
            <div className="home-title">Giftably</div>
            Find the perfect gift for your loved  ones in time for the holidays! Lol amazon catalogue maker
            
            <div class="shiny-btn-c go-container">
            <button onClick={this.props.toOptions}
            className="go-button shiny-btn">GO</button>
            <div class="shine"></div>
            </div>
          </div>
          </Animated>

          <div className="graphic-area">
          <img className="home-cy" src="/assets/cy_top.png" />
          <img className="home-bo" src="/assets/bo_front.png" />
          <div className="main-image"></div>
            </div>
        </div>
      </div>
      

    );
  }
}

export default HomePage;