pragma solidity >=0.4.21 <8.10.0;

contract Entry {
    struct Item {
        string itemId;
        string itemName;
        uint weight;
        string destination;
        string status;
        uint toOrgID;
        address toAddress;
        uint fromOrgID;
        address fromAddress;
    }
    address public contractUser;
    Item[] public items;

    constructor() public {
        contractUser = msg.sender;
    }

    function createItem(
        string memory _itemId,
        string memory _itemName,
        uint _weight,
        string memory _destination,
        string memory _status,
        uint _toOrgID,
        address _toAddress,
        uint _fromOrgID,
        address _fromAddress
    ) public returns (bool success) {
        Item memory itemToBeAdded = Item({
            itemId: _itemId,
            itemName: _itemName,
            weight: _weight,
            destination: _destination,
            status: _status,
            toOrgID: _toOrgID,
            toAddress: _toAddress,
            fromOrgID: _fromOrgID,
            fromAddress: _fromAddress
        });
        items.push(itemToBeAdded);
        return true;
    }

    function showItems() public view returns (uint length) {
        for (uint i = 0; i < items.length; i++) {
            items[i];
        }
        return items.length;
    }
}
