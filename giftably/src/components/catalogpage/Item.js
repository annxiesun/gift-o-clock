import React, { Component } from 'react';
import "./catalog.css"
import "../../global.css"
class Item extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="item-card">
                <img className="image" src={this.props.img} />
                <div className="item-name">
                    Test Product the best product to use when you are testing products
                </div>

                <div className="star-rating">
                    4.0
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 -3 15 20">
                        <path className="star" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>

                <div className="item-price">
                    item price
                </div>
            </div>

        );
    }
}

export default Item;