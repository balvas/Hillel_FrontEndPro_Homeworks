import React, { Component } from 'react';
import VoteButton from './VoteButton.js';

export default class Smiley extends Component {
    render() {
        const { smileyId, handleVote, image, votes } = this.props;
        const onClick = () => {
            handleVote(smileyId);
        }
        return (
            <div className='smiley_item'>
                <img src={`./${image}`} alt={image} /> Votes: {votes}
                <VoteButton
                    onClick={onClick}
                    text='Vote'
                />
            </div>


        );
    }
}