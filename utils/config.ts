// U2U Solaris Mainnet Configuration
export const U2U_MAINNET_CHAIN_ID = "0x27"; 
export const U2U_MAINNET_RPC = "https://rpc-mainnet.u2u.xyz";
export const U2U_MAINNET_EXPLORER = "https://u2uscan.xyz/";

// Contract address on U2U Solaris Mainnet
export const CONTRACT_ADDRESS = "0x423B1e68C91063a505C6aB4aD7736d6ED6a85aCC";

// Network configuration
export const SUPPORTED_NETWORKS = {
  [U2U_MAINNET_CHAIN_ID]: {
    name: "U2U Solaris Mainnet",
    rpc: U2U_MAINNET_RPC,
    explorer: U2U_MAINNET_EXPLORER,
    nativeCurrency: {
      name: "U2U",
      symbol: "U2U",
      decimals: 18,
    },
  },
};
