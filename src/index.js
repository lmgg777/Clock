import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

class App extends React.Component {
  render() {
    return <Clock />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
