pragma solidity ^0.8.0;
contract climateChange{
struct ClimateData {
}
uint timestamp;
string details;
mapping(address => ClimateData) public climateRecords;
function addClimateData(string memory details) public {
ClimateData memory newData = ClimateData(block.timestamp, details); climateRecords[msg.sender] = newData;
}
function getClimateData() public view returns (ClimateData memory) {
}
return climateRecords[msg.sender];
function updateClimateData(string memory details) public {
climateRecords[msg.sender].details = details:
}
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
        "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "name": "addClimateData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "name": "climateRecords",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getClimateData",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "details",
      "type": "string"
     }
    ],
    "internalType": "struct climateChange.ClimateData",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "name": "updateClimateData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
 }

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x9Fd67609Bd692f21ac5eCC8e4CF07961f3587026"

export const contract = new ethers.Contract(address, abi, signer)