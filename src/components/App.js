import React, { Component } from 'react';
import Inputs from './Inputs'
import IdeaList from './IdeaList'


class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      quality: 'Swill',
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
      quality: this.state.quality
    }
    this.state.ideas.push(idea)
    this.setState({ title: '', body: '' })
  }

  removeIdea(index) {
    const ideasList = this.state.ideas;
    ideasList.splice(ideasList.indexOf(index), 1);
    this.setState({ ideas: ideasList})
  }

  upvote() {
    if(this.state.quality === 'Swill') {
      this.setState({ quality: 'Good' })
    } else {
      this.setState({ quality: 'Great' })
    }
  }

  downvote() {
    if(this.state.quality === 'Great') {
      this.setState({ quality: 'Good' })
    } else {
      this.setState({ quality: 'Swill' })
    }
  }


  render() {
    return (
      <div className="App">
        <Inputs
          title={this.state.title}
          body={this.state.body}
          updateTitle={(e) => this.updateTitle(e)}
          updateBody={(e) => this.updateBody(e)}
          addIdea={() => this.addIdea()}

        />
        <IdeaList
          ideas={this.state.ideas}
          removeIdea={(index) => this.removeIdea(index)}
          upvote={() => this.upvote()}
          downvote={() => this.downvote()}
        />
      </div>
    );
  }
}

export default App;
