# 🏦 On-Chain Piggy Bank - U2U Solaris Mainnet dApp

A timelock savings dApp built for the U2U Hackathon, deployed on U2U Solaris Mainnet.

## ✨ Features

- **U2U Solaris Mainnet** - Built specifically for U2U Solaris Mainnet
- **Timelock Savings** - Deposit U2U or ERC-20 tokens with custom lock periods
- **No Early Withdrawals** - Enforced time-based locking mechanism
- **Batch Operations** - Withdraw multiple matured deposits at once
- **Responsive Design** - Works on desktop and mobile devices

## 🔗 U2U Solaris Mainnet Setup

### 1. Add U2U Solaris Mainnet to MetaMask

**Network Name:** U2U Solaris Mainnet  
**RPC URL:** `https://rpc-mainnet.u2u.xyz`  
**Chain ID:** `39` (hex: `0x27`)   
**Currency Symbol:** U2U  
**Block Explorer:** `https://u2uscan.xyz/`

### 2. Get U2U Tokens

## 💎 How to Use

### 1. Connect Wallet
- Click "Connect MetaMask" 
- Ensure you're on U2U Solaris Mainnet
- The app will automatically prompt you to switch networks if needed

### 2. Deposit U2U
- Enter the amount of U2U you want to deposit
- Set the lock duration in seconds (minimum 60 seconds)
- Click "Deposit U2U"
- Confirm the transaction in MetaMask

### 3. Deposit ERC-20 Tokens
- Enter the token contract address
- Specify the amount to deposit
- Set the lock duration
- Click "Approve & Deposit" (requires two transactions)

### 4. Withdraw
- Wait for your deposit to mature
- Click "Withdraw" on matured deposits
- Or use "Withdraw All Matured" for batch operations

## 🔧 Technical Details

- **Frontend:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 with custom animations
- **Blockchain:** U2U Solaris Mainnet integration
- **Wallet:** MetaMask compatibility
- **Smart Contract:** Solidity timelock contract with reentrancy protection

## 📱 Smart Contract

The dApp interacts with a deployed smart contract on U2U Solaris Mainnet:

- **Contract Address:** `0x423B1e68C91063a505C6aB4aD7736d6ED6a85aCC`
- **Chain ID:** 39 (0x27)
- **Network:** U2U Solaris Mainnet
- **Features:** ETH/ERC-20 deposits, timelock mechanism, batch withdrawals
- **Security:** Reentrancy protection, proper access controls

## 🐛 Troubleshooting

### Common Issues

1. **"Wrong Network" Error**
   - Ensure MetaMask is connected to U2U Solaris Mainnet (Chain ID: 39 / 0x27)
   - Use the "Switch to U2U Solaris Mainnet" button

2. **"Could not decode result data" Error**
   - This usually means no deposits exist yet
   - The app handles this gracefully and shows an empty state

3. **Transaction Fails**
   - Check if you have sufficient U2U for gas fees
   - Ensure the contract address is correct
   - Verify you're on the correct network

### Debug Mode

Open browser console to see detailed error messages and transaction logs.

## 🎯 U2U Hackathon Features

- **U2U Solaris Mainnet** - Deployed on U2U Solaris Mainnet for production use
- **EVM Compatibility** - Uses U2U's EVM layer for Ethereum tooling
- **Gas Optimization** - Efficient smart contract design
- **User Experience** - Intuitive interface for DeFi beginners

## 📄 License

MIT License - Built for U2U Hackathon

## 🤝 Contributing

This project was built for the U2U Hackathon. Feel free to fork and improve!

---

**Built with ❤️ for the U2U Community**
