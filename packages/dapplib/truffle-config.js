require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict permit flame silver gravity rifle spawn pumpkin harvest hero fortune tell'; 
let testAccounts = [
"0xf2e4e36c75345e2843eda2f5161ecb049620f319c873636358a560e2dc637fd8",
"0xb58c89acd3590a9b55b463b225ab1bf1258005441eb91de4c0ea7c00a6cc6618",
"0xf5be970ac2f2c64f352035ead18216011b4ed99a32228c5f080224f3fae89087",
"0x2573e870636b7a46c3bbb06c20503fa33f0ce079059c6602b6e0a09cdd39cf4f",
"0x2b93b12a3310c436b5891ad835da20a9420a14b03fe6f94764b2c1b1aae7052f",
"0xc552474bdcf1a3f4de715769c0d59afa584346aa2b0a4b0aff56373495a2fd5d",
"0x196c44628a7a6aec345f49f7c90004affec7ff94e84acc4517ed2e3268e83628",
"0x21ddb08a2f203fe29c99e2d789408583c6607b8c28f5cf998862209b8519605f",
"0xc2ab32d6e04cf180811a9ec31bdaea8c089c6543cf85a1c1bcdf3d4ca3da5f3c",
"0x1ad55f385d5c3154e5472f4aa0d3b13cea22cf14c39290a30d058655a61d7be2"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

