import logo from './logo.svg';
import './App.css';
import OptionPage from "./components/options/OptionPage"
import CatalogPage from "./components/catalogpage/CatalogPage"
import HomePage from "./components/homepage/HomePage"
import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
  super();
  
  this.updateIntrestInput = this.updateIntrestInput.bind(this);
  this.updateIntrests = this.updateIntrests.bind(this);
  this.deleteIntrest = this.deleteIntrest.bind(this);

  this.updatePriceFloor = this.updatePriceFloor.bind(this)
  this.updatePriceLimit = this.updatePriceLimit.bind(this)

  this.toCatalog = this.toCatalog.bind(this);
  this.toOptions = this.toOptions.bind(this);

  this.state = {
    page: 0,
    intrests: ["hello","hi"],
    products: [],
    input_intrest: "hkokok",
    price_floor:0,
    price_limit:0
  }
   }

  updatePriceFloor(e) {
    this.setState({price_floor:e.target.value})
  }

  updatePriceLimit(e) {
    this.setState({price_limit:e.target.value})
  }

  updateIntrestInput(e) {
    console.log("jj");
    this.setState({input_intrest: e.target.value})
  }

  updateIntrests(e) {
    let i = this.state.intrests
    i.push(this.state.input_intrest)
    this.setState({intrests: i})
  }

  deleteIntrest(e) {
    let i = this.state.intrests
    i.splice(i.indexOf(e.target.value), 1)
    this.setState({intrests: i})
  }

  toCatalog(){
    this.setState({page: 2})
  }

  toOptions(){
    this.setState({page: 1})
  }

  render() {

    let page;
    if (this.state.page==0){
      page=<HomePage toOptions={this.toOptions}/>
    }
    else if(this.state.page==1){
      page=        <OptionPage intrests={this.state.intrests}
      input_intrest={this.state.input_intrest}
      updateIntrestInput={this.updateIntrestInput}
      updateIntrests={this.updateIntrests}
      deleteIntrest={this.deleteIntrest}
      updatePriceFloor={this.updatePriceFloor}
      updatePriceLimit={this.updatePriceLimit}
      toCatalog ={this.toCatalog}
      />

    } else {
      page=<CatalogPage/>
    }

    return (
      <div>
{page}
        </div>
    
    );
  }
}

export default App;
