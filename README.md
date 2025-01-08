# GetCert-Decentralized-application

A decentralized GetCert app uses blockchain to securely issue and verify certificates. The deployer can easily create and issue certificates, ensuring authenticity and transparency. Users can view and verify their certificates through a secure, tamper-proof interface. Blockchain technology guarantees that certificates cannot be altered or deleted, preserving their integrity. The system ensures complete trust and transparency, with verifiable records accessible to all participants.

# Key Features
Issue Certificates: Admins can issue certificates to users.
Verify Certificates: Users can view and verify their certificates using a unique certificate ID.
Blockchain Storage: All certificates are stored securely on the Ethereum blockchain, ensuring immutability and transparency.
# Tech Stack
Frontend: React.js
Blockchain: Ethereum
Smart Contracts: Solidity
Web3 Library: ethers.js
Wallet: MetaMask for connecting to the blockchain
Getting Started
  Prerequisites
Node.js (v14 or later)
MetaMask extension or another Ethereum-compatible wallet
A local Ethereum node or use the Rinkeby testnet for testing
Setup Instructions
Clone the repository:

  git clone https://github.com/Decentralized-Certificate-Application/CERTIDAPP.git
cd CERTIDAPP
Install dependencies:

npm install

Run the React frontend:

npm run dev

# Deploy the Smart Contract
Write and Compile the Smart Contract: copy the smart contract in Solidity and compile it using a framework like Hardhat.

Deploy the Contract to the Ethereum Network: Hardhat to deploy the smart contract to the Ethereum network (local or testnet).

With Hardhat:
Install Hardhat: npm install --save-dev hardhat
Compile the contract: npx hardhat compile
Deploy using: `npx hardhat run scripts/deploy.js --network
Get the Deployed Contract Address and ABI: After successful deployment, you will receive the contract address and ABI. Save these values as they will be required for interacting with the contract in your DApp.

Configure the Contract in the Project: Use the contract address and ABI in your project (e.g., in a configuration file) to interact with the deployed contract.

# Set Up MetaMask
Install the MetaMask Browser Extension:

Go to MetaMask and install the extension for your preferred browser.
Connect MetaMask to the Ethereum Network:

Open MetaMask and connect it to the Ethereum network (either local or a testnet like Rinkeby).
Import or Create an Account in MetaMask:

Create a new MetaMask wallet or import an existing one. Follow the instructions provided by MetaMask.
Interact with the DApp:

Once MetaMask is connected to the network and the wallet is set up, you can interact with the DApp on the Ethereum blockchain.
