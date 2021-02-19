import React, { Component } from 'react';
import Item from "./Item"
import "./catalog.css"
import test from "../../test.json"
import "../../global.css"

const per_page = 12;
class CatalogPage extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      page: 1
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  goToPage(page_num) {
    this.setState({ page: page_num })
    this.componentDidMount()
  }

  render() {
    let prod_block = [];


    for (let i = (this.state.page) * per_page; i < test.search_results.length; i++) {
      prod_block.push(<Item product={test.search_results[i]} />)
      if (prod_block.length >= per_page) {
        break;
      }
    }

    let num_pages = Math.ceil(test.search_results.length / per_page);
    let buttons = [];

    for (let i = 0; i<num_pages;i++){
      buttons.push(<button className={(i == this.state.page) ? 
        "num-btn selected" : "num-btn" }
      onClick={() => this.goToPage(i)}>{i+1}</button>);
    }

    /*
    for (let i=0; i< this.props.products.length;i++){
      prod_block.push(<Item product = {this.props.products[i]}/>)
    }*/
    console.log(prod_block);

    return (
      <div className="cat-page">
                        <div className="top-bar" onClick={this.props.toHome}>
                <img className="top-bar-logo" src="/assets/logo.png"/>
                <span className="top-bar-title"> Giftably</span>
                </div>

        <div className="cat-title">Personalized Gift Catalog</div>
        <div className="item-row">
          {prod_block}
        </div>
        <div className="btn-block">
       {buttons}
       </div>
      </div>

    );
  }
}

export default CatalogPage;