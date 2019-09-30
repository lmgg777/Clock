import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
