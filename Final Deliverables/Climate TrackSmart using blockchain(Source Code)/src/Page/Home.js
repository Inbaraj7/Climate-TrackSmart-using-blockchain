import React, { Component } from "react";
import "./Module.css";
class Module extends Component {
  render() {
    return <div className="mod-container">{this.props.children}</div>;
  }
}
export default Module;
