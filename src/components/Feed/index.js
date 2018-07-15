import React, { Component } from 'react';
import Letter from '../Letter';

class Feed extends Component {
  render() {
    const { lettersData } = this.props;

    return (
      <div className="feed">
        <div className="feed-inner page-inner">
          <div className="letters-list">
            {lettersData && lettersData.map(letter => <Letter {...letter} key={letter.slug} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
