import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Actions from './actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super();

  }

  increment(team, amount) {
    let newScore = team.score + amount;
//@params amount = int  team = state of team
    this.props.dispatch(Actions.increment(team.name, newScore));
  }



  render() {
    return (
      <div className="App">
      <div className="App-logo">

        <div className="team1" >
          <h2>Team 1</h2>
          <p>
          {this.props.team1.score}
          </p>
          <button onClick={ () =>this.increment(this.props.team1, 2)}>
            Safety or 2 point conversion
          </button>
          <button onClick={ () =>this.increment(this.props.team1, 1)}>
            Extra point
          </button>
          <button onClick={() => this.increment(this.props.team1, 6)}>
            Touchdown
          </button>
          <button onClick={() => this.increment(this.props.team1, 3)}>
           3 point Goal kick
          </button>

        </div>
        <div className="team2" >
          <h2>Team 2</h2>
          <p>
          {this.props.team2.score}
          </p>
          <button onClick={ () =>this.increment(this.props.team2, 2)}>
            Safety or 2 point conversion
          </button>
          <button onClick={ () =>this.increment(this.props.team2, 1)}>
            Extra point
          </button>
          <button onClick={() => this.increment(this.props.team2, 6)}>
            Touchdown
          </button>
          <button onClick={() => this.increment(this.props.team2, 3)}>
           3 point Goal kick
          </button>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team1: state.team1,
  team2: state.team2
});

export default connect(mapStateToProps)(App);
