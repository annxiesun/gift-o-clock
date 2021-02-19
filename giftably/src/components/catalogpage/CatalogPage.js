import React, { Component } from 'react';
import axios from 'axios';
import Item from "./Item"
import "./catalog.css"
class CatalogPage extends React.Component {
  constructor() {
    super();
    this.getAPISearch = this.getAPISearch.bind(this);
   }

   getAPISearch(term) {
    const axios = require('axios');
    // set up the request parameters
 
    const params = {
     api_key: "A4CF984D0770481286B2375684798E53",
     type: "search",
     amazon_domain: "amazon.com",
     search_term: term
     
   }
    
    // make the http GET request to Rainforest API
    axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {
        
        // print the JSON response from Rainforest API
        console.log(JSON.stringify(response.data.search_results, 0, 2));
    
      }).catch(error => {
        // catch and print the error
        console.log(error);
        
      })
      {
        
    }

   }
   componentDidMount() {
    
}

  render() {
    return (
        <div className="cat-page">
            <div className="item-row">
            <Item/>
            <Item/>
            <Item/>
            </div>
            </div>
    
    );
  }
}

export default CatalogPage;