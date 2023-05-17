import React, { Component } from 'react';

import './App.css';
import Smiley from './Smiley';
import VoteButton from './VoteButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 1, image: 'smiley1.png', votes: 0 },
        { id: 2, image: 'smiley2.png', votes: 0 },
        { id: 3, image: 'smiley3.png', votes: 0 }
      ],
      showWinner: false
    };

    this.handleVote = this.handleVote.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.showResults = this.showResults.bind(this);
  }



  handleVote(smileyId) {
    this.setState((prevState) => {
      const updatedOptions = prevState.options.map((option) => {
        if (option.id === smileyId) {
          return { ...option, votes: option.votes + 1 };
        }
        return option;
      });

      return { options: updatedOptions };
    });
  };

  getWinner() {
    const { options, showWinner } = this.state;
    if (showWinner) {
      const sortedSmilies = [...options].sort((a, b) => b.votes - a.votes);
      if (sortedSmilies.length > 0) {
        const winner = sortedSmilies[0];
        return winner;
      }

    }
    return null;
  };

  showResults() {
    const { options } = this.state;
    const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
    if (totalVotes === 0) {
      alert('There are no votes yet.');
    } else {
      this.setState({ showWinner: true });
    }
  }

  render() {
    const { options, showWinner } = this.state;
    const winner = this.getWinner();
    return (
      <div className='container'>
        <h1>Smiley Voting</h1>
        <div>
          {options.map((option) => (
            <Smiley
              key={option.id}
              image={option.image}
              smileyId={option.id}
              votes={option.votes}
              handleVote={this.handleVote}
            />
          ))}
        </div>

        <div className='results'>
          <VoteButton
            text="Show Results"
            onClick={this.showResults}
          />
          {showWinner && winner && (
            <div>
              <h2>Winner:</h2>
              <img src={`./${winner.image}`} alt={winner.image} />
              <p>Votes: {winner.votes}</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}


