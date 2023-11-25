import React, { Component } from "react";
import Entry from "../../contracts/Entry.json";
import "./Dashboard.css";
import Module from "../Module";
class Dashboard extends Component {
  state = {
    web3: null,
    accounts: "",
    contract: null,
    itemId: "",
    item: "",
    weight: "",
    destination: "",
    status: "",
    fromOrgID: "",
    fromAddress: "",
    toOrgID: "",
    toAddress: "",
  };
  componentDidMount = async () => {
    const web3 = this.props.web3;
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
    this.setState({
      web3,
      accounts,
      contract: instance,
      fromAddress: accounts[0],
      toAddress: instance._address,
    });
  };
  submitEntry = async (e) => {
    e.preventDefault();
    const {
      accounts,
      contract,
      itemId,
      item,
      weight,
      destination,
      status,
      fromOrgID,
      fromAddress,
      toOrgID,
      toAddress,
    } = this.state;
    // interact and write to contract
    await contract.methods
      .createItem(
        itemId,
        item,
        weight,
        destination,
        status,
        fromOrgID,
        fromAddress,
        toOrgID,
        toAddress
      )
      .send({
        from: accounts[0],
      });
  };
  handleItemId = (event) => {
    this.setState({ itemId: event.target.value });
  };
  handleItem = (event) => {
    this.setState({ item: event.target.value });
  };
  handleWeight = (event) => {
    this.setState({ weight: event.target.value });
  };
  handleDestination = (event) => {
    this.setState({ destination: event.target.value });
  };
  handleStatus = (event) => {
    this.setState({ status: event.target.value });
  };
  handleFromOrgID = (event) => {
    this.setState({ fromOrgID: event.target.value });
  };
  handleFromAddress = (event) => {
    this.setState({ fromAddress: event.target.value });
  };
  handleToOrgID = (event) => {
    this.setState({ toOrgID: event.target.value });
  };
  handleToAddress = (event) => {
    this.setState({ toAddress: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.submitEntry}>
        <div className="dashboard-wrapper">
          <Module>
            <label>Item ID</label>
            <input
              required
              value={this.state.itemId}
              onChange={this.handleItemId}
            />
            <label>Item</label>
            <input
              required
              value={this.state.item}
              onChange={this.handleItem}
            />
            <label>Weight</label>
            <input
              required
              value={this.state.weight}
              onChange={this.handleWeight}
            />
            <label>Destination / Region</label>
            <input
              required
              value={this.state.destination}
              onChange={this.handleDestination}
            />
            <label>Status</label>
            <input
              required
              value={this.state.status}
              onChange={this.handleStatus}
            />
          </Module>
          <div className="send-details">
            <Module>
              <label>To: Organization ID</label>
              <input
                required
                value={this.state.fromOrgID}
                onChange={this.handleFromOrgID}
              />
              <label>To: Wallet Address</label>
              <input
                required
                value={this.state.fromAddress}
                onChange={this.handleFromAddress}
              />
            </Module>
            <Module>
              <label>From: Organization ID</label>
              <input
                required
                value={this.state.toOrgID}
                onChange={this.handleToOrgID}
              />
              <label>From: Wallet Address</label>
              <input
                required
                value={this.state.toAddress}
                onChange={this.handleToAddress}
              />
              <button type="submit" className="mod-btn">
                Send
              </button>
            </Module>
          </div>
        </div>
      </form>
    );
  }
}
export default Dashboard;
