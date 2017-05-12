const initialState = {
  count: { strikes: 0, balls: 0 },
  pitcherAttempt: ''
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'THROW_STRIKE':
      console.log('Threw a strike', state);
      return { ...state, pitcherAttempt: 'THROW_STRIKE' }

    case 'THROW_BALL':
    console.log('Threw a Ball', state);
      return { ...state, pitcherAttempt: 'THROW_BALL' }

    case 'SWING_AND_HIT':
    console.log('Swung and hit', state);
      return initialState

    case 'SWING_AND_MISS':
      console.log('Swung and miss', state);
      if (state.pitcherAttempt ==='THROW_STRIKE' && state.count.strikes === 2 || state.count.balls === 3){
        return initialState
      } else if (state.pitcherAttempt ==='THROW_BALL' && state.count.strikes === 2 || state.count.balls === 3){
        return initialState
      }
      else if(state.pitcherAttempt === 'THROW_STRIKE'){
        return { ...state, count: { ...state.count, strikes: state.count.strikes + 1 } }
      } else {
        return { ...state, count: { ...state.count, strikes: state.count.strikes + 1} }
      }

      case 'NO_SWING':
      let { count } = state
      if (state.pitcherAttempt ==='THROW_BALL' && state.count.balls === 3 || state.count.strikes === 2) {
          return initialState
      } else if (state.pitcherAttempt ==='THROW_STRIKE' && state.count.balls === 3 || state.count.strikes === 2) {
          return initialState
      } else if (state.pitcherAttempt === 'THROW_STRIKE') {
        return { ...state, count: { ...count, strikes: count.strikes + 1 } }
      } else if (state.pitcherAttempt ==='THROW_BALL'){
        return { ...state, count: { ...count, balls: count.balls + 1 }}
      }
    default:
      return state
  }
}
