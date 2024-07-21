'use client'
import React, { useState, useEffect, createContext } from "react";
import { ethers, getDefaultProvider, utils } from "ethers";
import CryptoJS from 'crypto-js'
import ForcePresaleContractAddress from "./contractsData/ForcePreSaleContract-address.json";
import ForcePresaleContract from "./contractsData/ForcePreSaleContract.json";
import USDTContractAddress from "./contractsData/USDTToken-address.json";
import USDTContract from "./contractsData/USDCToken.json"
import USDCContractAddress from "./contractsData/USDCToken-address.json";
import USDCContract from "./contractsData/USDCToken.json"
import ForceCoinAddress from "./contractsData/ForceCoin-address.json";
import ForceCoin from "./contractsData/ForceCoin.json";
import { useSwitchNetwork, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react'
import { ToastContainer, toast } from "react-toastify";
import { formatUnits } from "ethers/lib/utils";


const getProviderPresaleContract = () => {
  const providersss = process.env.NEXT_PUBLIC_RPC_URL_ETH;
  const provider = new ethers.providers.JsonRpcProvider(providersss); //"http://localhost:8545/"
  const presaleContract = new ethers.Contract(
    ForcePresaleContractAddress.address,
    ForcePresaleContract.abi,
    provider
  );
  return presaleContract;
};

export const Store = createContext();

export const StoreProviders = ({ children }) => {

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { switchNetwork } = useSwitchNetwork()
  const { walletProvider } = useWeb3ModalProvider()
  const [loader, setloader] = useState(false);


  const [contractData, setContractData] = useState({
    ethBalance: 0,
    usdcBalance: 0,
    usdtBalance: 0,
    ForceBalance: 0,
    raisedAmount: 0,
    tokenPrice: 0,
    totalSupply: 5000000000,
    isPreSaleActive: false,
    stakedTokens: 0,
    startTime: 0,
    duration: 0,
    rewardEarned: 0,
  });

  const GetValues = async () => {
    try {
      setloader(true);

      const providersss = process.env.NEXT_PUBLIC_RPC_URL_ETH;
      const provider = new ethers.providers.JsonRpcProvider(providersss); //"http://localhost:8545/"
      const presaleContract = new ethers.Contract(ForcePresaleContractAddress.address, ForcePresaleContract.abi, provider);

      const sellPrice = await presaleContract.salePrice()
      const raisedAmount = await presaleContract.raisedAmount();
      const isPresale = await presaleContract.isSale();

      setContractData(prevState => ({
        ...prevState,
        raisedAmount: formatUnits(raisedAmount, 6)?.toString(),
        tokenPrice: sellPrice?.toString(),
        isPreSaleActive: isPresale,
      }));

      if (isConnected) {

        const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
        const balance = await ethersProvider.getBalance(address);

        const USDTContracts = new ethers.Contract(USDTContractAddress.address, USDTContract.abi, ethersProvider);
        const USDCContracts = new ethers.Contract(USDCContractAddress.address, USDCContract.abi, ethersProvider);
        const ForceContracts = new ethers.Contract(ForceCoinAddress.address, ForceCoin.abi, ethersProvider);

        console.log(balance?.toString(), "balancebalancebalancebalancebalance")

        const USDTBalance = await USDTContracts.balanceOf(address);
        const USDCBalance = await USDCContracts.balanceOf(address);
        const ForceBalance = await ForceContracts.balanceOf(address);

        setContractData(prevState => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDTBalance, 6)?.toString(),
          usdtBalance: formatUnits(USDCBalance, 6)?.toString(),
          ForceBalance: formatUnits(ForceBalance, 18)?.toString(),
        }));
      }
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log("Fourth")
      console.log(error);
    }
  };

  const networkChange = async () => {

    let chainid = process.env.NEXT_PUBLIC_CHAIN_ID;

    if (isConnected && chainId?.toString() !== chainid?.toString()) {
      console.log(chainid, chainId, "chainidchainid")
      switchNetwork(Number(chainid));
      return
    }
  }

  const BuyWithUSDTandUSDC = async (payAmountInUSDT, tokens, isUSDT) => {

    try {
      networkChange();

      let tokensss = ethers.utils.formatEther(tokens?.toString());
      console.log(+tokensss?.toString(), "tokenssstokenssstokensss")

      if (+tokensss?.toString() < 10) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 10000) {
        return toast.error("Please buy maximum One Thousand (10000) Dollar");
      }

      setloader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const presaleContract = new ethers.Contract(ForcePresaleContractAddress.address, ForcePresaleContract.abi, signer);
      const USDTContracts = new ethers.Contract(USDTContractAddress.address, USDTContract.abi, signer);
      const USDCContracts = new ethers.Contract(USDCContractAddress.address, USDCContract.abi, signer);

      let amountInWei = (+payAmountInUSDT?.toString() * 10 ** 6);
      if (isUSDT) {
        let allowance = await USDTContracts.allowance(address, ForcePresaleContractAddress?.address);

        if (+allowance?.toString() < +amountInWei?.toString()) {
          let tokenApprove = await USDTContracts.approve(ForcePresaleContractAddress?.address, amountInWei);
          await tokenApprove.wait();
        }

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();

      } else {
        console.log("check2")
        let allowance = await USDCContracts.allowance(address, ForcePresaleContractAddress?.address);
        console.log(+allowance?.toString(), "allowanceallowanceallowance")
        if (+allowance?.toString() < +amountInWei?.toString()) {
          console.log("check3")
          let tokenApprove = await USDCContracts.approve(ForcePresaleContractAddress?.address, amountInWei);
          await tokenApprove.wait();
        }
        console.log("check", isUSDT)
        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();

      }

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      toast.error(`${JSON.stringify(error.reason)}`);
      console.log(error);
    }
  };

  const BuyWithETH = async (tokens, amountInEthPayable) => {
    try {

      networkChange();

      let tokensss = ethers.utils.formatEther(tokens?.toString());


      if (tokensss?.toString() < 10) {
        return toast.error("Please buy minimum One (1) Doller");
      } else if (tokensss?.toString() > 10000) {
        return toast.error("Please buy maximum One Thousand (10000) Doller");
      }

      console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()")
      console.log(amountInEthPayable?.toString(), "tokens?.toString()tokens?.toString()")


      setloader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const presaleContract = new ethers.Contract(ForcePresaleContractAddress.address, ForcePresaleContract.abi, signer);
      let amountInWei = ethers.utils.parseEther(amountInEthPayable?.toString())
      const buying = await presaleContract.buyWithETH(tokens?.toString(), { value: amountInWei?.toString() });
      buying.wait();
      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const presaleStart = async () => {
    try {
      networkChange();

      setloader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const presaleContract = new ethers.Contract(ForcePresaleContractAddress.address, ForcePresaleContract.abi, signer);

      const start = await presaleContract.startTheSale();
      start.wait();

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const presaleStop = async () => {
    try {

      networkChange();

      setloader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const presaleContract = new ethers.Contract(ForcePresaleContractAddress.address, ForcePresaleContract.abi, signer);

      const stop = await presaleContract.stopTheSale();
      stop.wait();

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const addTokenToMetamask = async () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (typeof window.ethereum !== "undefined") {
      try {
        // Directly open Metamask app and add token
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: ForceCoinAddress.address, // Token address
              symbol: '$FFC', // Token symbol
              decimals: 18, // Token decimals
              image: 'https://example.com/Force-logo.png', // Token image URL
            },
          },
        });

        if (wasAdded) {
          toast.success("Token successfully added to Metamask!");
        } else {
          toast.error("Failed to add the token.");
        }
      } catch (error) {
        toast.error("Failed to add token to Metamask. Please try again later.");
        console.error("Failed to add token to Metamask: ", error);
      }
    } else {
      if (isMobile) {
        // Metamask app is not installed, redirect to installation page
        window.open(
          "https://metamask.app.link/dapp/https://www.forcefinancecoin.com/"
        );
      } else {
        // if no window.ethereum and no window.web3, then MetaMask or Trust Wallet is not installed
        alert(
          "MetaMask or Trust Wallet is not installed. Please consider installing one of them."
        );
      }
    }
  };

  const copyToClipboard = () => {
    const tokenAddress = "0xbf05C4023E735aDb912E2cc34c0f391702efEC34"; // Your token address
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("Token address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  console.log(address, "addressaddressaddressaddress")
  useEffect(() => {
    networkChange();
  }, [])

  return (
    <>
      <Store.Provider
        value={{
          loader,
          networkChange,
          setloader,
          contractData,
          copyToClipboard,
          addTokenToMetamask,
          GetValues,
          getProviderPresaleContract,
          BuyWithUSDTandUSDC,
          BuyWithETH,
          presaleStart,
          presaleStop,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
