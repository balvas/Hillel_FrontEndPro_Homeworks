import React, { Component } from 'react';

export default class VoteButton extends Component {
    render() {
        const { onClick, text } = this.props;
      
        return (
            <button onClick={onClick}>{text}</button>
        );
    }
}