import React, { Component } from 'react';
import { createStore } from 'redux'
import './App.css';
import Pitch from './components/Pitch.js'
import  Throws from './actions/actionController.js'

const store = createStore(Throws)

class App extends Component {
  render() {
    return (
      < Pitch
      value={store.getState()}
      onStrike={() => store.dispatch({type: 'THROW_STRIKE'})}
      onBall={() => store.dispatch({type: 'THROW_BALL'})}
      onHit={() => store.dispatch({type: 'SWING_AND_HIT'})}
      onMiss={() => store.dispatch({type: 'SWING_AND_MISS'})}
      onNoSwing={() => store.dispatch({type: 'NO_SWING'})}
      />
    );
  }
}

export default App;
