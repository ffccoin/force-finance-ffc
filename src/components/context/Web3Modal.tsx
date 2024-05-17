'use client'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '48d44678afcba02c797f5d30369c89a7'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_ETH}`
}

const Binance = {
  chainId: 56,
  name: 'Binance',
  currency: 'BNB',
  explorerUrl: 'https://testnet.bscscan.com',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_BNB}`
}

const BNBSmartChainTestnet = {
  chainId: 97,
  name: 'Binance',
  currency: 'BNB',
  explorerUrl: 'https://testnet.bscscan.com',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_TBNB}`
}


// 3. Create modal
const metadata = {
  name: 'XV Bot Website',
  description: 'This is xv Bot website',
  url: 'https://xvbot.io/', // origin must match your domain & subdomain
  icons: ['https://xvbot.io/_next/image?url=%2Flogo.png&w=128&q=75']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  // rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})


createWeb3Modal({
  ethersConfig,
  chains: [Binance, BNBSmartChainTestnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
  enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }:any) {
  return children
}