import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        <input
        value={this.props.title}
        className="idea-title"
        onChange={this.props.updateTitle}
        />
        <input
        value={this.props.body}
        className="idea-body"
        onChange={this.props.updateBody}
        />
        <button
          onClick={this.props.addIdea}
        >
        Submit
        </button>
      </div>
    );
  }
}

export default Inputs;
