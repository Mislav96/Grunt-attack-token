pragma solidity 0.5.16;


import "../lib/ERC1155.sol";
import "../lib/ERC1155Mintable.sol";

contract Token is ERC1155, ERC1155Mintable{
  constructor() public{

  }

  function scoreForToken(uint256 id, uint256 amount, address sender,address market) external{
    balances[1][market] = balances[1][market].add(amount.mul(id.sub(1).mul(250)));
    balances[1][sender] = balances[1][sender].sub(amount.mul(id.sub(1).mul(250)));
  }


}
