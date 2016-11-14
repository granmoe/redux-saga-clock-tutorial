import React from 'react'
import { connect } from 'react-redux'

import { incrementMilliseconds, decrementMilliseconds, resetClock, startClock, pauseClock, rewindClock } from 'duck'

class Clock extends React.Component {
  render () {
    const {
      milliseconds,
      incrementMilliseconds,
      decrementMilliseconds,
      resetClock,
      startClock,
      pauseClock,
      rewindClock
    } = this.props

    return (
      <div>
        <svg onClick={ incrementMilliseconds } onDoubleClick={ resetClock } onMouseLeave={ decrementMilliseconds }
          className="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="500">
          <circle cx="50" cy="50" r={ 30 } stroke={ 'rgba(1,1,1,1)' } fill="orange" />
        </svg>
        <p>{ milliseconds }</p>
        <p>
          <button type="button" onClick={ startClock }>Start Clock</button>
          <button type="button" onClick={ pauseClock }>Pause Clock</button>
          <button type="button" onClick={ rewindClock }>Rewind Clock</button>
        </p>
      </div>
    )
  }
}

export default connect(state => ({
  milliseconds: state.milliseconds
}), ({
  incrementMilliseconds,
  decrementMilliseconds,
  resetClock,
  startClock,
  pauseClock,
  rewindClock
}))(Clock)
