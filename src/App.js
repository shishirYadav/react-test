import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Movie from './Movies/Movie';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Movie />
      </div>
    );
  }
}

export default App;
