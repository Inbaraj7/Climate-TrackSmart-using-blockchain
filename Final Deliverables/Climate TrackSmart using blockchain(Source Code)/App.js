import React, { Component } from "react";
import Entry from "./contracts/Entry.json";
import getWeb3 from "./getWeb3";
import Navbar from "./components/Navbar/index";
import Dashboard from "./components/Dashboard";
import "./App.css";
class App extends Component {
  state = { web3: null, accounts: null, contract: null };
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Entry.networks[networkId];
      const instance = new web3.eth.Contract(
        Entry.abi,
        deployedNetwork && deployedNetwork.address
      );
      // Set web3, accounts, and contract to the state
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  };
  render() {
    if (!this.state.web3) {
      return (
        <>
          <div className="App">
            <div className="message-container">Please log in with Metamask</div>
          </div>
        </>
      );
    }
    return (
      <>
        <Navbar address={this.state.accounts} />
        <div className="App">
          <Dashboard web3={this.state.web3} accounts={this.state.accounts} />
        </div>
      </>
    );
  }
}
export default App;
