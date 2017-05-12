import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import  Throws from './actions/actionController.js'
import { createStore } from 'redux';
import Pitch from './components/Pitch.js'




const store = createStore(Throws)

const render = () => ReactDOM.render(

    < Pitch
    value={store.getState()}
    onStrike={() => store.dispatch({type: 'THROW_STRIKE'})}
    onBall={() => store.dispatch({type: 'THROW_BALL'})}
    onHit={() => store.dispatch({type: 'SWING_AND_HIT'})}
    onMiss={() => store.dispatch({type: 'SWING_AND_MISS'})}
    onNoSwing={() => store.dispatch({type: 'NO_SWING'})}
    />,

  document.getElementById('root')
);

render()
store.subscribe(render)
