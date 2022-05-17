require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth outside code gesture merry flock giggle'; 
let testAccounts = [
"0x2d1a46172daf533baa1da002521e8f7c5d782f8c59ac634ed4758440c3282e4e",
"0x1889949997a65997c2893281f08fb6b2df24b0bdfa7a9c0235268211945dcb1c",
"0x5462613240bdc6f8c62de15f1da93d8ba02e29ea30b673844b97f581d9105b1c",
"0xa78495285610b04d5515f72c034922a502842d81a692c6a00baa278f0e60bf04",
"0x7fc866cba969945617f6745e8f81eaac44943035da60180837aec8838d624798",
"0xc555f884d1212ca57c1e6ebc027ef1bf295c8c533e233cce18103b9f7bbafce5",
"0xbcb18dc4c0c9f75d210f0d2818d6de4aa550775c6cf2016ff0842a43cfe936fe",
"0xe2dc04942a3247ca64e8aabdd7e8a69125a28919d0b25e84a0b481c191f15c57",
"0x6355b190fcd0ce46a6f158fef674df4f32deb9c2d8fd704cb582587dc81a3dc5",
"0x3248f291a39cf1292f688ee77ca51bfb66e46c12e106b9b059812c64a0620a41"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

