import Web3 from "web3";

const web3 = new Web3();

const privateKey = "0xDA6747DF7B39D6806F27D1F7A020BED08CF0C79482724A6294288B172DD33F84";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

console.log(account);