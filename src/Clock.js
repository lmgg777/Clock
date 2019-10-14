import React from "react";

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="ui container message" style={{ marginTop: "20px" }}>
        <div className="ui icon header">
          <i className="small stopwatch icon"></i>
          The current time is.
          <div style={{ margin: "0", height: "60px !important" }}>
            {this.state.time}
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
