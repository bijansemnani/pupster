import React from "react";

class Timer extends React.Component {
  // since this is a stateful react component, we can access "props" in the es6 constructor method...
  constructor(props) {
    super();

    // ...which is only useful if the props are going to define the initial state. here, we are setting duration to the number of seconds between the timestamp and now
    this.state = {
      duration: Math.floor((new Date().getTime() - props.time) / 1000)
    };
  }
  componentDidMount(){
    this.interval = setInterval(() => {
        this.setState({
          duration: this.state.duration + 1
        });
      },1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // custom method to format the duration in 00:00 syntax
  format = (t) => {
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  render() {
    return (
      <span style={this.state.duration > 600 ? {color:"red"}: {}}>
        {this.format(this.state.duration)}
      </span>
    );
  }
}

export default Timer;
