import React, { Component } from 'react';

class Pitch extends Component{

  onStrikes () {
    console.log("He threw!!")
    this.props.onStrike()
  }

  render() {
    const { value, onStrike, onBall, onHit, onMiss, onNoSwing } = this.props
    return (
      <div>
      <p>  Strikes:{value.count.strikes} times </p>
      <p>  Balls:{value.count.balls} times </p>

        <button onClick={onStrike}>
          Strike
        </button>

        <button onClick={onBall}>
          Ball
        </button>

        <button onClick={onHit}>
          Hit
        </button>

        <button onClick={onMiss}>
          Miss
        </button>

        <button onClick={onNoSwing}>
          No Swing
        </button>
      </div>
    )
  }
}

export default Pitch
