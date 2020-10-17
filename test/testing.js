const Token = artifacts.require("Token");
const Marketplace = artifacts.require("Marketplace");
const truffleAssert = require("truffle-assertions");

contract("Coinflip", async function(accounts){

  it("should be possible to get score", async function(){
    let tokInst = await Token.deployed();
    let marInst = await Marketplace.deployed();
    truffleAssert.passes(marInst.buyScoreToken(200,{from:accounts[2], value : 20000}));
  })

  it("should be possible to buy tokens", async function(){
    let tokInst = await Token.deployed();
    let marInst = await Marketplace.deployed();
    truffleAssert.passes(marInst.buyScoreToken(1500,{from:accounts[2], value : 1500000}), "not buying score");
    truffleAssert.passes(marInst.buyToken(2,1,{from:accounts[2], value : 15000}), "not buying 1");
    truffleAssert.passes(marInst.buyToken(3,1,{from:accounts[2], value : 15000}), "not buying 2");
    truffleAssert.passes(marInst.buyToken(4,1,{from:accounts[2], value : 15000}), "not buying 3");
  })

});
