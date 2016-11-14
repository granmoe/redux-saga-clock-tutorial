import { takeLatest } from 'redux-saga'

const initialState = {
  milliseconds: 0
}

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case 'reset-clock':
      return {
        ...currentState,
        milliseconds: 0
      }
    case 'increment-milliseconds':
      return {
        ...currentState,
        milliseconds: currentState.milliseconds + 100
      }
    case 'decrement-milliseconds':
      if (!currentState.milliseconds) { return currentState }

      return {
        ...currentState,
        milliseconds: currentState.milliseconds - 100
      }
    default:
      return currentState
  }
}

// actions
export const resetClock = () => ({ type: 'reset-clock' })
export const incrementMilliseconds = () => ({ type: 'increment-milliseconds' })
export const decrementMilliseconds = () => ({ type: 'decrement-milliseconds' })

// saga actions
export const startClock = () => ({ type: 'start-clock' })
export const pauseClock = () => ({ type: 'pause-clock' })
export const rewindClock = () => ({ type: 'rewind-clock' })

// saga
export function* rootSaga () {
  yield takeLatest(['start-clock', 'pause-clock', 'rewind-clock'], handleClockAction)
}

function* handleClockAction ({ type }) {
  console.log('Pushed this action to handleClockAction: ', type)
}
