var Marketplace = artifacts.require("./Marketplace.sol");
var Token = artifacts.require("./Token.sol");

module.exports = (deployer) =>
  deployer.deploy(Marketplace, Token.address)
.then(() =>{
  //console.log("token1")
  createToken1()
})
.then(() =>createToken2())
.then(() =>createToken3())
.then(() =>createToken4())
.then(() =>{
  //console.log("going to mint");
  mintTokens();
  //console.log("minted");
});;


async function createToken1(){
  (await Token.deployed()).create(0,"");
  //console.log("minted1");
}
async function createToken2(){
  (await Token.deployed()).create(0,"");
  //console.log("minted2");
}
async function createToken3(){
  (await Token.deployed()).create(0,"");
  //console.log("minted3");
}
async function createToken4(){
  (await Token.deployed()).create(0,"");
  //console.log("minted4");
}


function mintTokens(){
  Token.deployed().then(instance =>{
    instance.mint(1, [Marketplace.address], [500000] );
    instance.mint(2, [Marketplace.address], [20] );
    instance.mint(3, [Marketplace.address], [10] );
    instance.mint(4, [Marketplace.address], [1000] );
    //console.log("gotov");
  })
}
