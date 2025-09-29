// U2U Testnet Configuration
export const U2U_TESTNET_CHAIN_ID = "0x9b4"; 
export const U2U_TESTNET_RPC = "https://rpc-nebulas-testnet.uniultra.xyz";
export const U2U_TESTNET_EXPLORER = "https://testnet.u2uscan.xyz/";

// Contract address on U2U testnet
export const CONTRACT_ADDRESS = "0xa612c68fB455e9b598fCFB1C46c120ED21ded5F6";

// Network configuration
export const SUPPORTED_NETWORKS = {
  [U2U_TESTNET_CHAIN_ID]: {
    name: "U2U Testnet",
    rpc: U2U_TESTNET_RPC,
    explorer: U2U_TESTNET_EXPLORER,
    nativeCurrency: {
      name: "U2U",
      symbol: "U2U",
      decimals: 18,
    },
  },
};
