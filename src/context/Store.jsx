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


console.log(ForcePresaleContractAddress, "ForcePresaleContractAddressForcePresaleContractAddress")

const getSignerPresaleContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const presaleContract = new ethers.Contract(
    ForcePresaleContractAddress.address,
    ForcePresaleContract.abi,
    signer
  );
  return presaleContract;
};

const getProviderPresaleContract = () => {
  const providersss = process.env.NEXT_PUBLIC_RPC_URL_SEPO;
  const provider = new ethers.providers.JsonRpcProvider(providersss); //"http://localhost:8545/"
  const presaleContract = new ethers.Contract(
    ForcePresaleContractAddress.address,
    ForcePresaleContract.abi,
    provider
  );
  return presaleContract;
};

const getSignerUSDTContrat = () => {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());
  const signer = provider.getSigner();
  const USDTContracts = new ethers.Contract(
    USDTContractAddress.address,
    USDTContract.abi,
    signer
  );
  return USDTContracts;
};

const getSignerUSDCContrat = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const USDCContracts = new ethers.Contract(
    USDCContractAddress.address,
    USDCContract.abi,
    signer
  );
  return USDCContracts;
};

const getSignerForceContrat = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const ForceContracts = new ethers.Contract(
    ForceCoinAddress.address,
    ForceCoin.abi,
    signer
  );
  return ForceContracts;
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

      const sellPrice = await getProviderPresaleContract().salePrice();
      const raisedAmount = await getProviderPresaleContract().raisedAmount();
      const isPresale = await getProviderPresaleContract().isSale();

      setContractData(prevState => ({
        ...prevState,
        raisedAmount: formatUnits(raisedAmount, 6)?.toString(),
        tokenPrice: sellPrice?.toString(),
        isPreSaleActive: isPresale,
      }));

      if (isConnected) {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        const USDTBalance = await getSignerUSDTContrat().balanceOf(address);
        const USDCBalance = await getSignerUSDCContrat().balanceOf(address);
        const ForceBalance = await getSignerForceContrat().balanceOf(address);

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
      // toast.error(`${JSON.stringify(error.reason)}`);
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
        return toast.error("Please buy maximum One Thousand (1000) Dollar");
      }

      console.log(tokens, "isUSDT");

      setloader(true);
      let amountInWei = (+payAmountInUSDT?.toString() * 10 ** 6);
      if (isUSDT) {
        let allowance = await getSignerUSDTContrat().allowance(address, ForcePresaleContractAddress?.address);

        if (+allowance?.toString() < +amountInWei?.toString()) {
          let tokenApprove = await getSignerUSDTContrat().approve(ForcePresaleContractAddress?.address, amountInWei);
          await tokenApprove.wait();
        }
        const buying = await getSignerPresaleContract().buyWithUSDT(tokens, isUSDT);
        buying.wait();

      } else {
        console.log("check2")
        let allowance = await getSignerUSDCContrat().allowance(address, ForcePresaleContractAddress?.address);
        console.log(+allowance?.toString(),"allowanceallowanceallowance")
        if (+allowance?.toString() < +amountInWei?.toString()) {
          console.log("check3")
          let tokenApprove = await getSignerUSDCContrat().approve(ForcePresaleContractAddress?.address, amountInWei);
          await tokenApprove.wait();
        }
        console.log("check",isUSDT)
        const buying = await getSignerPresaleContract().buyWithUSDT(tokens, isUSDT);
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
        return toast.error("Please buy maximum One Thousand (1000) Doller");
      }

      console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()")
      console.log(amountInEthPayable?.toString(), "tokens?.toString()tokens?.toString()")


      setloader(true);
      let amountInWei = ethers.utils.parseEther(amountInEthPayable?.toString())
      const buying = await getSignerPresaleContract().buyWithBNB(tokens?.toString(), { value: amountInWei?.toString() });
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

      const start = await getSignerPresaleContract().startTheSale();
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

      const stop = await getSignerPresaleContract().stopTheSale();
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
    try {

      if (!isConnected) {
        return toast.error("Please Connect Your Wallet");
      }
      //   // Check if window.ethereum object is available

      const providerss = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());





      // const provider = new ethers.providers.JsonRpcProvider(window.ethereum); //"http://localhost:8545/"

      //   console.log(provider,"provider")
      // if (provider) {
      //   toast.success("Ether Provider");
      // }
      //  else if(provider){
      //     toast.success("Ether window.ethereum");
      //   }
      // console.log(providers,"providers")

      if (providerss) {
        // Use ethereum.request method to add the token
        const wasAdded = await providerss.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: ForceCoinAddress?.address, // Token address
              symbol: '$FFC', // Token symbol
              decimals: 18, // Token decimals
              image: 'https://example.com/Force-logo.png', // Token image URL
            },
          },
        });
        if (wasAdded) {
          toast.success("Thanks for your interest!");
        } else {
          toast.success("Your loss!");
        }
        // toast.success("Token added to Metamask!");
      } else {
        // Metamask not available, show error message
        toast.error("Metamask not available.");
      }
    } catch (error) {
      console.error("Failed to add token to Metamask: ", error);
      toast.error("Failed to add token to Metamask. Please try again later.");
    }
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
          addTokenToMetamask,
          GetValues,
          getProviderPresaleContract,
          BuyWithUSDTandUSDC,
          BuyWithETH,
          presaleStart,
          presaleStop,
          getSignerPresaleContract,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
