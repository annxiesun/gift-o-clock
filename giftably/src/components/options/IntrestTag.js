import React, { Component } from 'react';

class NAMEGOESHERE extends React.Component {
  constructor(props) {
	super(props);
   }


  render() {
    return (
        <div class="intrest-tag">
            {this.props.intrest}
            <button onClick={this.props.deleteIntrest} value={this.props.intrest}/>
            </div>
    
    );
  }
}

export default NAMEGOESHERE;