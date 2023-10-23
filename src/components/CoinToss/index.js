// Write your code here
import './index.css'
import {Component} from 'react'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImage, headscount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headscount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadsCount = headscount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImage
      latestHeadsCount += 1
    } else {
      tossImage = tailsImage
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headscount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headscount, tailsCount} = this.state
    const totalCount = headscount + tailsCount
    return (
      <div className="app-container">
        <div className="app">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" />
          <button className="button" onClick={this.onTossCoin} type="button">
            Toss Coin
          </button>
          <div>
            <p>Total: {totalCount}</p>
            <p>Heads: {headscount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
