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
      gameStatus: "",
      lastPlay: "",
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
        lastPlay: "حمله ",
        gameStatus:
          newCount > 0 ? "شما برنده شده اید !!" : perviousState.gameStatus,
      };
    });
  };

  handleDefence = () => {
    //alert("Defend clicked");
    this.setState((perviousState) => {
      let newCount = perviousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "دفاع",
        gameStatus:
          newCount > -10 ? "شما بانده شده اید !!" : perviousState.gameStatus,
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    //علاوه بر بررسی مقدار، نوع داده نیز را در نظر می‌گیرد
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        lastPlay: "",
        gameStatus: "",
      };
    });
  };

  render() {
    return (
      <div className=" text-white text-center container"  >
        <h1>امتیاز بازی :{this.state.count}</h1>
        <p>
          اگر امتیاز شما +10 شود برنده می شود و اگر امتیاز شما -10 شود بازنده
          اید!!!
        </p>
        <p>آخرین بازی :{this.state.lastPlay}</p>
        <h3>وضعیت بازی:{this.state.gameStatus}</h3>

        <div className="row">
          <div
            className="col-lg-6 col-md-6 text-start 
           col-6  "
          >
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
          <div className="col-lg-6 col-md-6  col-6   text-end ">
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
        </div>

        <div className=" row">
          <div className="col-lg-12 col-md-12  col-sm-12">
            <button
              className=" btn btn-secondary w-50 mt-2"
              onClick={this.handleRandomPlay}
            >
              بازی تصادفی
            </button>
            <br />
          </div>

          <div className="col-lg-12 col-md-12  col-sm-12 ">
            <button
              className=" btn btn-warning w-50  mt-2"
              onClick={this.handleReset}
            >
              تنظیم مجدد
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}
