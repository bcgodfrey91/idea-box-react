import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      ideas:[]
    }
  }

  updateTitle(e) {
    this.setState({ title: e.target.value })
  }

  updateBody(e) {
    this.setState({ body: e.target.value })
  }

  addIdea() {
    const idea = {
      title: this.state.title,
      body: this.state.body,
      quality: "Swill"
    }
    this.state.ideas.push(idea)
    this.setState({ title: '', body: '' })
  }

  renderIdeas() {
    return this.state.ideas.map((idea, index) => {
        return (
          <section className="idea" key={index}>
            <p>{index}</p>
            <p>{idea.title}</p>
            <p>{idea.body}</p>
            <p>{idea.quality}</p>
          </section>
      )
    })
  }



  render() {
    return (
      <div className="App">
        <input
        value={this.state.title}
        className="idea-title"
        onChange={(e) => this.updateTitle(e)}
        />
        <input
        value={this.state.body}
        className="idea-body"
        onChange={(e) => this.updateBody(e)}
        />
        <button
          onClick={() => this.addIdea()}
        >
        Submit
        </button>

        <h1>{ this.renderIdeas() }</h1>
      </div>
    );
  }
}

export default App;
