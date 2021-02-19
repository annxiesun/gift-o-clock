import React, { Component } from 'react';
import "../global.css"
class Loading extends React.Component {
  constructor() {
	super();
   }


  render() {
    return (
      <div class="loading">
        <img class="loading-icon" src="/assets/logo.png"/>
        </div>
    
    );
  }
}

export default Loading;