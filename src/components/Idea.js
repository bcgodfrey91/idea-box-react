import React, { Component } from 'react';

class Idea extends Component {
  render() {
    return(
      <section className="idea">
        <button
          onClick={this.props.removeIdea}
        >
        Delete
        </button>
        <p>{this.props.idea.title}</p>
        <p>{this.props.idea.body}</p>
        <p>{this.props.idea.quality}</p>
        <button
        className="upvote"
        onClick={this.props.upvote}
        >
        ⬆
        </button>
        <button
        className="downvote"
        onClick={this.props.downvote}
        >
        ⬇
        </button>
      </section>
    )
  }
}

export default Idea;
