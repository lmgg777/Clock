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
      <div className="ui container">
        <div className="ui placeholder segment" style={{padding: '0', minHeight: '150px', marginTop: '20px'}}>
          <div className="ui icon header" style={{margin: '0'}}>
            <i className="small stopwatch icon"></i>
            The current time is.
            <div className="ui header" style={{margin: '0', minHeight: '30px'}}>{this.state.time}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
