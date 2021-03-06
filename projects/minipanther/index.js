const { ohmTvl } = require('../helper/ohm')

const treasury = "0xBc461eA008c586a1721c6bF6a712f38e199A3Ce7" 
const miniPantherToken = "0x3264810174f577F82DDD4FD08818F368AC363505"
const stakingAddress = "0x7dc10Ade8599bf5033577F60C6740479aa39DB41"
const treasuryTokens = [
    ["0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83", false], //WFTM
    ["0x321162Cd933E2Be498Cd2267a90534A804051b11", false], //WBTC
    ["0x74b23882a30290451A17c44f4F05243b6b58C76d", false], //WETH
    ["0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", false], //DAI
    ["0x82f0b8b456c1a451378467398982d4834b6829c1", false], //MIM
    ["0x761D6a950c8F441D616f34d6D918230936a3F27b", true], //MiniPanther-DAI
   ]
module.exports = ohmTvl(treasury, treasuryTokens, "fantom", stakingAddress, miniPantherToken, undefined, undefined, true)
