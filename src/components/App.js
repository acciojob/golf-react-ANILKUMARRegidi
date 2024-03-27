import React, { Component } from 'react';
import './styles/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: '0px' }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.key === 'ArrowRight' && this.state.renderBall) {
      this.setState((prevState) => ({
        ballPosition: {
          left: `${parseInt(prevState.ballPosition.left, 10) + 5}px`
        }
      }));
    }
  };

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
