import React, { Component } from 'react';
import "./optionpage.css"
import "../../global.css"

import IntrestTag from "./IntrestTag.js"
class OptionPage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let tags = [];
        for (let i = 0; i < this.props.intrests.length; i++) {
            tags.push(<IntrestTag intrest={this.props.intrests[i]} 
            deleteIntrest={this.props.deleteIntrest}/>)
        }
        return (

            <div className="option-page">

                <div>
                    Interests
            <input onChange={this.props.updateIntrestsInput} 
            value={this.props.input_intrest} />
            <button onClick={this.props.updateIntrests}/>
                </div>
                {tags}
                <div>
                    Price Range
            <input onChange={this.props.updatePriceFloor}/>-
            <input onChange={this.props.updatePriceLimit}/>
                </div>
                <button onClick={this.props.toCatalog}>GO</button>
            </div>
        );
    }
}

export default OptionPage;