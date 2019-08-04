import React, { Component } from 'react';
import './QuoteGenerator.css';

class QuoteGenerator extends Component {

    constructor(props){
        super(props);
        this.state= {Quote: "Be Noble",  Author: "Rajiv"};
        this.quotes = [ { Quote : "Be the change that you would like to see in world", Author: "Gandhi" },
    { Quote : "Truth always prevails", Author: "Upanishad" },
    {Quote : "Earth has enough to meet all humans needs but not greed", Author: "Mahtma Gandhi"},
    {Quote: "Desire is the source of all pain", Author: "Buddha"},
    {Quote: "Practice to steady your mind", Author: "Geeta"},
    {Quote: "Let your desires not cloud your mind", Author: "Upanishad"},
    {Quote: "Dont drown in the sorrows of the world", Author:"Bagvad Geeta"},
    {Quote: "Enjoy the life, you have only one", Author: "Anonymous"}
    ]
        
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    handleNewQuote()
    {
        const random = Math.floor(Math.random()* this.quotes.length);

        this.setState({Quote: this.quotes[random].Quote, Author: this.quotes[random].Author});


    }

  render() {
    return (

        <div id="quote-box" >
          <label id="text" >{this.state.Quote}</label>
          <label id="author" > - {this.state.Author}</label>
          <br></br>
          <button id="new-quote" onClick={this.handleNewQuote}> New Quote </button>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet"> Tweet Quote </a>
          </div>
    );
  }
}

export default QuoteGenerator;
