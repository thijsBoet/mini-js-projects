import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  state = {
    textInput : "",
    textOutput : "",
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const pigLatin = this.state.textInput
        .split(" ")
        .map((word) => `${word.substr(1)}${word[0]}ay`)
        .join(" ");
    this.setState({
      textOutput: pigLatin,
    });
  }
  
  render() {
    return (
      <main class="container-fluid">
        <div class="jumbotron m-5 p5">
          <h1 class="display-4">Pig Latin Translator</h1>
          <p class="lead">Translate your text here!</p>
          <hr class="my-4" />
        </div>
        <form
          id="translateForm"
          class="form-group mx-5 my-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Original Text</span>
            </div>
            <textarea
              id="textInput"
              name="textInput"
              class="form-control"
              aria-label="Text"
              ref="textInput"
              value={this.state.textInput}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">P Translation</span>
            </div>
            <textarea
              id="textOutput"
              name="textOutput"
              class="form-control"
              aria-label="Pig Latin Translation"
              ref="textOutput"
              value={this.state.textOutput}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block"
            id="translateFormBtn"
            onClick={this.handleSubmit}
          >
            Translate
          </button>
        </form>
      </main>
    );
  }
}
