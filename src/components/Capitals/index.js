import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeStatusId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeStatusId: event.target.value})
  }

  getFilteredStatus = () => {
    const {activeStatusId} = this.state
    console.log(activeStatusId)
    const filteredStatus = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeStatusId,
    )

    return filteredStatus.country
  }

  render() {
    const {activeStatusId} = this.state
    const filteredStatus = this.getFilteredStatus(activeStatusId)
    console.log(filteredStatus)

    return (
      <div className="app-container">
        <div className="container">
          <div className="card-container">
            <h1>Countries And Capitals</h1>
            <div className="select-container">
              <div>
                <select
                  className="form-control"
                  onChange={this.onChangeCapital}
                  value={activeStatusId}
                >
                  {countryAndCapitalsList.map(item => (
                    <option key={item.id} value={item.id} className="option">
                      {item.capitalDisplayText}
                    </option>
                  ))}
                </select>
              </div>

              <p>is Capital of which country?</p>
            </div>
            <p>{filteredStatus}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
