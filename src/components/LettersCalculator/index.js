// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeInput = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="word-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>

            <label htmlFor="phrase" className="tag">
              Enter the phrase
            </label>
            <input
              type="text"
              value={count}
              placeholder="Enter the phase"
              onChange={this.onChangeInput}
              className="user-input"
              id="phrase"
            />

            <div className="letter-counter-container">
              <p className="letter-count"> No.of letters: {count.length} </p>
            </div>
          </div>
          <div className="img-container">
            <img
              alt="letters calculator"
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
