import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, count: 0, isTossed: true}

  onClickCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isTossed: true,
        heads: prevState.heads + 1,
        count: prevState.count + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isTossed: false,
        tails: prevState.tails + 1,
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {heads, tails, count, isTossed} = this.state
    const srcImage = isTossed
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <>
        <div className="app-container">
          <div className="container">
            <div className="card-container">
              <h1 className="title">Coin Toss Game</h1>
              <p className="head-para">Heads (or) Tails</p>

              <img src={srcImage} alt="toss result" className="image" />

              <button
                type="button"
                onClick={this.onClickCoin}
                className="button"
              >
                Toss Coin
              </button>
              <div className="heads-tails-container">
                <p className="Total-Heads-Tails">Total:{count}</p>
                <p className="Total-Heads-Tails">heads:{heads}</p>
                <p className="Total-Heads-Tails">Tails:{tails}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CoinToss
