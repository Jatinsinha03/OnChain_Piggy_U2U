# 🏦 On-Chain Piggy Bank - U2U Testnet dApp

A timelock savings dApp built for the U2U Hackathon, deployed on U2U EVM testnet.

## ✨ Features

- **U2U Testnet Compatible** - Built specifically for U2U EVM testnet
- **Timelock Savings** - Deposit U2U or ERC-20 tokens with custom lock periods
- **No Early Withdrawals** - Enforced time-based locking mechanism
- **Batch Operations** - Withdraw multiple matured deposits at once
- **Responsive Design** - Works on desktop and mobile devices

## 🔗 U2U Testnet Setup

### 1. Add U2U Testnet to MetaMask

**Network Name:** U2U Testnet  
**RPC URL:** `https://rpc-nebulas-testnet.uniultra.xyz`  
**Chain ID:** `0x9b4`   
**Currency Symbol:** U2U  
**Block Explorer:** `https://testnet.u2uscan.xyz/`

### 2. Get Testnet U2U

## 💎 How to Use

### 1. Connect Wallet
- Click "Connect MetaMask" 
- Ensure you're on U2U Testnet
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
- **Blockchain:** U2U EVM testnet integration
- **Wallet:** MetaMask compatibility
- **Smart Contract:** Solidity timelock contract with reentrancy protection

## 📱 Smart Contract

The dApp interacts with a deployed smart contract on U2U testnet:

- **Contract Address:** `0xa612c68fB455e9b598fCFB1C46c120ED21ded5F6`
- **Features:** ETH/ERC-20 deposits, timelock mechanism, batch withdrawals
- **Security:** Reentrancy protection, proper access controls

## 🐛 Troubleshooting

### Common Issues

1. **"Wrong Network" Error**
   - Ensure MetaMask is connected to U2U Testnet (Chain ID: 420)
   - Use the "Switch to U2U Testnet" button

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

- **U2U Testnet Native** - Built specifically for U2U ecosystem
- **EVM Compatibility** - Uses U2U's EVM layer for Ethereum tooling
- **Gas Optimization** - Efficient smart contract design
- **User Experience** - Intuitive interface for DeFi beginners

## 📄 License

MIT License - Built for U2U Hackathon

## 🤝 Contributing

This project was built for the U2U Hackathon. Feel free to fork and improve!

---

**Built with ❤️ for the U2U Community**
