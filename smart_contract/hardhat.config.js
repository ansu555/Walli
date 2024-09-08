// https://linea-sepolia.g.alchemy.com/v2/JbXJTiGbYuVMOE-yPNJ53QrFG7uCKbeg

require (`@nomiclabs/hardhat-waffle`);

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://linea-sepolia.g.alchemy.com/v2/JbXJTiGbYuVMOE-yPNJ53QrFG7uCKbeg',
      accounts: ['0x${process.env.PRIVATE_KEY}']
    }
    
  }
}