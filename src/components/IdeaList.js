import React, { Component } from 'react';
import Idea from './Idea';

class IdeaList extends Component {
  renderIdeas() {
    return this.props.ideas.map((idea, index) => {
      return (
        <section key={index}>
          <Idea
            idea={idea}
            upvote={this.props.upvote}
            downvote={this.props.downvote}
            removeIdea={this.props.removeIdea}
           />
        </section>
        );
      });
    }

  render() {
      return (
        <section className='IdeaList'>
         {this.renderIdeas()}
        </section>
      );
    }
  }

export default IdeaList;
