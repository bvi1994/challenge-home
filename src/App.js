import React, {Component} from 'react';
import fetch from 'node-fetch';
import {JSONAddress} from './App.constants';

import ProductInfo from './components/ProductInfo/ProductInfo'

const jsonFile = require('./index.json')

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      productList: [],
    }
  }

  async componentDidMount(){
    console.log('hey there')
    let response;
    try {
      response = await fetch(JSONAddress);
    } catch(error) {
      console.log('Response error: ', error);
    }
    try {
      response = await response.json();
    } catch(error) {
      console.log('Unable to work with the API')
      console.log('Error: ', error)
      response =  jsonFile
    }
    this.setState({
      productList: response.groups,
    })
    console.log(this.state);
  }

  render(){
    if(!this.state.productList){
      return (
        <div className="App">
          Unable to JSON from WestElm API
        </div>
      )
    }
    return (
      <div className="App">
        <ul>
        {
          this.state.productList.map((product, i) => {
            return <li><ProductInfo product={product} key={product.id}/></li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default App;
