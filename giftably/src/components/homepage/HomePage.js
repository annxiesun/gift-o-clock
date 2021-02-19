import React, { Component } from 'react';
import "./homepage.css"
import "../../global.css"

class HomePage extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <div className="home-shape" />
        <div className="home-page">

          <div className="home-text">
            <img className="logo" src="/assets/logo.png" />
            <div className="home-title">Giftably</div>
            Find the perfect gift for your loved  ones in time for the holidays! Lol amazon catalogue maker
            <button onClick={this.props.toOptions}
            className="go-button">GO</button>
          </div>

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