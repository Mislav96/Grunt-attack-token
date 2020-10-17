pragma solidity 0.5.16;

import "./Token.sol";
import "../lib/SafeMath.sol";

contract Marketplace {
  Token private _token;

  using SafeMath for uint256;

  mapping(uint256=>uint256) price;

  constructor(Token token) public{
    require(address(token) != address(0), "Sending to zero address");
    _token = token;
    price[1]=1;//score token
    price[2]=2;//attack speed token
    price[3]=2;//movement token
    price[4]=2;//HP token
  }

  function () external payable{
    buyScoreToken(1);
  }
  function buyScoreToken(uint256 amount) public payable{
    uint256 WeiAmount = msg.value;
    require(amount > 0,"Amount 0 buyScoreToken");
    require(WeiAmount >= amount.mul(price[1]),"no neccessary amount of eth");
    _token.safeTransferFrom(address(this), msg.sender, 1, amount, "");
  }
  function buyToken(uint256 id,uint256 amount) public payable{
    require(amount > 0,"Amount 0");
    require(_token.balanceOf(msg.sender, 1) >= amount.mul(id.sub(1).mul(250)),"no neccessary amount of score");
    require(id>1);
    require(id<5);
    //umanji score useru
    _token.scoreForToken(id, amount,msg.sender, address(this));
    //daj mu token
    _token.safeTransferFrom(address(this), msg.sender, id, amount, "");
  }

  function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4){
        return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
    }


}
