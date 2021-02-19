import React, { Component } from 'react';
import "./optionpage.css"
import "../../global.css"
import { Animated } from "react-animated-css";

import InterestTag from "./InterestTag.js"
class OptionPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this)
    }


    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.updateinterests()
        }
    }

    render() {
        let tags = [];
        for (let i = 0; i < this.props.interests.length; i++) {
            tags.push(<InterestTag interest={this.props.interests[i]}
                deleteinterest={this.props.deleteinterest} />)
        }
        return (
            <div className="option-container">
                <div className="top-bar" onClick={this.props.toHome}>
                    <img className="top-bar-logo" src="/assets/logo.png" />
                    <span className="top-bar-title"> Giftably</span>
                </div>
                <div className="option-shape" />
                <img className="option-bo" src="/assets/bo_top.png" />
                <img className="option-cy" src="/assets/cy_back.png" />


                <div className="option-page">
                    <Animated className="animate"
                        animationIn="bounceInLeft" animationOut="fadeOut"
                        animationInDuration={1000} animationOutDuration={1000} isVisible={true}>

                        <div class="option-headline">Tell us what you're looking for</div>
                        <div class="input-title">{this.props.input_title}?
                        <div className="limit-text">  (Up to 3 prompts)</div></div>
                <div>

                            <input className="option-input interests" onChange={this.props.updateinterestInput}
                                value={this.props.input_interest} onKeyPress={this.handleKeyPress}/>
                            <button className="interest-btn" onClick={this.props.updateinterests}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="tag-flex">
                            {tags}
                        </div>

                        <div className="next-btn-c shiny-btn-c">
                            <button className="shiny-btn next-button" onClick={this.props.toCatalog}>
                                >
                    </button>
                            <div class="shine"></div>
                        </div>
                    </Animated>
                </div>

            </div>
        );
    }
}

export default OptionPage;