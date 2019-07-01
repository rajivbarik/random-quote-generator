import React, { Component } from 'react';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import QuoteGenerator from './QuoteGenerator';

class App extends Component {
  
  render() {
    return (
     

      <div className="App-header">
       Quotes
        <QuoteGenerator onLoad="handleOnload"/>
      </div>
    );
  }
}

export default App;
