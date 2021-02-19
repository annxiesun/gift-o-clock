import logo from './logo.svg';
import './App.css';
import OptionPage from "./components/options/OptionPage"
import CatalogPage from "./components/catalogpage/CatalogPage"
import HomePage from "./components/homepage/HomePage"
import React, { Component } from 'react';
import Item from "./components/catalogpage/Item"
import Loading from "./components/loading";
import $ from "jquery";
import axios from 'axios';

const prompts = ["Giftee's Favourite Food", "Giftee's Favourite Candy",
"Giftee's Favourite Movie", "Giftee's Favourite Book", "Giftee's Favourite Cartoon",
"Giftee's Favourite Artist", 
"Giftee's Profession", 
"The Occasion", "The Season", 
"Relationship",
"Giftee's Favourite Animal", "Giftee's Favourite Color",
"A Hobby of theirs", "A Passion of theirs"]

class App extends React.Component {
  constructor() {
  super();
  
  this.updateinterestInput = this.updateinterestInput.bind(this);
  this.updateinterests = this.updateinterests.bind(this);
  this.deleteinterest = this.deleteinterest.bind(this);

  this.toCatalog = this.toCatalog.bind(this);
  this.toOptions = this.toOptions.bind(this);
  this.toHome = this.toHome.bind(this);

  this.getAPISearch = this.getAPISearch.bind(this);

  var prompt = prompts[Math.floor(Math.random() * prompts.length)];

  this.state = {
    page: 0,
    interests: [],
    products: [],
    input_interest: "memory cards",
    input_title: prompt

  }
   }

  updateinterestInput(e) {
    console.log("jj");
    this.setState({input_interest: e.target.value})
  }

  updateinterests(e) {
    if (this.state.interests.length>=3){
      return;
    }
    let i = this.state.interests
    i.push(this.state.input_interest)

    var prompt = prompts[Math.floor(Math.random() * prompts.length)];

    this.setState({interests: i, input_title: prompt})

    
  }

  deleteinterest(e) {
    let i = this.state.interests
    i.splice(i.indexOf(e.target.value), 1)
    this.setState({interests: i})
  }

  toCatalog(){
    //this.getAPISearch();
    //this.scrapeSearch();
    if (this.state.interests.length==0) {
      setTimeout(
        () => {
          $('.input-title').css("transform", "translateY(0px)")
        }, 200)
      $('.input-title').css("transform", "translateY(-25px)")
    } else {

    this.setState({page: 2})
    }
    
  }

  toOptions(){
    this.setState({page: 1})
  }

  toHome(){
    this.setState({page: 0})
  }

  getAPISearch() {
    
    const axios = require('axios');
    // set up the request parameters
 
    console.log(this.state.interests[0]);
    
    const params = {
     api_key: "",
     type: "search",
     amazon_domain: "amazon.com",
     search_term: this.state.interests[0],
     page:1
     
   }
    
    // make the http GET request to Rainforest API
    axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        
        // print the JSON response from Rainforest API
        console.log(JSON.stringify(response.data.search_results, 0, 2));
        
        this.setState({products:response.data.search_results});

    
      }).catch(error => {
        // catch and print the error
        console.log(error);
        
      })
      {
        
    }

   }
  
  render() {

    let page;
    if (this.state.page==0){
      page=<HomePage toOptions={this.toOptions}/>
    }
    
    else if(this.state.page==1){
      page=
      <OptionPage interests={this.state.interests}
      input_title={this.state.input_title}
      input_interest={this.state.input_interest}
      updateinterestInput={this.updateinterestInput}
      updateinterests={this.updateinterests}
      deleteinterest={this.deleteinterest}
      

      toCatalog ={this.toCatalog}
      toHome ={this.toHome}
      
      />

    } 
    else {
      page=<CatalogPage products={this.state.products}
      toHome ={this.toHome}/>
    }

    return (
      <div>
{page}
        </div>
    
    );
  }
}

export default App;
