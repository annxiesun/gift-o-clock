import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class Tag extends React.Component {
  constructor(props) {
  super(props);
  
  this.componentWillUnmount = this.componentWillUnmount.bind(this);
  this.state={
    isVisible:true
  }
   }


   async componentWillUnmount() {
     this.setState({isVisible:false});
   }
   
  render() {
    return (
      <Animated className="animate" animationIn="bounceIn" animationOut="bounceOut" animationInDuration={500} animationOutDuration={500} isVisible={this.state.isVisible}>
        <div class="interest-tag">
            {this.props.interest}
            <button className="tag-x" onClick={this.props.deleteinterest} value={this.props.interest}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 15 10">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

            </button>
            </div>
            </Animated>
    
    );
  }
}

export default Tag;