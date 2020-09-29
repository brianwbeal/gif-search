import React, { Component } from 'react';

// top-level components like app should handle data
// and pass it down to its children components
import axios from 'axios';


import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';



export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  }
  
  componentDidMount() {
    this.performSearch()
  }
  
  performSearch = (query = 'cats') => {

    // Giphy API endpoint
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=OvKsoSUAQV0IPFTgrzBI0leHe0b2PvFy`;
    
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />
          }
        </div>
      </div>
    );
  }
}
