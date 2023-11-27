import React from "react";
import attack from "./Images/attack.png";
import defend from "./Images/defend.png";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAttack = () => {
    //alert("Attack clicked");
    // this.setState({ count: this.state.count + 1 });

    this.setState((perviousState) => {
      //یک عدد را ده ضرب می کند و گرد میکند
      let newCount = perviousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  };

  handleDefence = () => {
    //alert("Defend clicked");
    this.setState((perviousState) => {
      let newCount = perviousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score :{this.state.count}</h1>
        <p>you win at +10 point and lose at -10 points!</p>
        <p>Last Play</p>
        <h3>Game State :</h3>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            alt=""
            style={{
              width: "100px",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>

        <div className="col-6 col-md-3  ">
          <img
            alt=""
            style={{
              width: "100px",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4 p-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay()} >
            Random Play</button>
          <br />

          <button className="btn btn-warning w-100 mt-2"
             onClick={this.handleReset()} >Reset Play</button>
        </div>
      </div>
    );
  }
}
