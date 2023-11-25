import React, { Component } from "react";
import "./Navbar.css";
import Logo from "../../logo.svg";
class Navbar extends Component {
  state = { web3: null, accounts: null, contract: null };
  render() {
    let walletAddress = this.props.address ? (
      <div className="navbar-mid">Connected: {this.props.address}</div>
    ) : (
      <div className="navbar-mid">Not Connected</div>
    );
    return (
      <div className="container">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        {walletAddress}
        <div className="navbar-end"></div>
      </div>
    );
  }
}
export default Navbar;
