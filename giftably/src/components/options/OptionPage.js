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
                deleteIntrest={this.props.deleteIntrest} />)
        }
        return (
            <div className="option-container">
                <div className="option-shape" />
                <img className="option-bo" src="/assets/bo_top.png" />
                <img className="option-cy" src="/assets/cy_back.png" />
                <div className="option-page">


                    <div class="option-headline">Tell us what you're looking for</div>
                    Interests
                <div>

                        <input className="option-input intrests" onChange={this.props.updateIntrestInput}
                            value={this.props.input_intrest} />
                        <button className="intrest-btn" onClick={this.props.updateIntrests}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="tag-flex">
                        {tags}
                    </div>
                    Price Range
                <div>

                        <input className="option-input price" onChange={this.props.updatePriceFloor} />
                        <span class="ind">-</span>
                        <input className="option-input price" onChange={this.props.updatePriceLimit} />
                    </div>
                    <button className="next-button" onClick={this.props.toCatalog}>
                        <svg className="next-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 13 13">
                            <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default OptionPage;