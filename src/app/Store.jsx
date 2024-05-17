'use client'
import React, { useState, useEffect, createContext } from "react";
import { ethers, providers, utils } from "ethers";
import CryptoJS from 'crypto-js'
import creedMasterContractAddress from "../components/contractsData/CreedMasterContract-address.json";
import creedMasterContract from "../components/contractsData/CreedMasterContract.json";
import creedPresaleContractAddress from "../components/contractsData/CreedPreSaleContract-address.json";
import creedPresaleContract from "../components/contractsData/CreedPreSaleContract.json";
import USDTContractAddress from "../components/contractsData/USDTToken-address.json";
import USDTContract from "../components/contractsData/USDCToken.json"
import USDCContractAddress from "../components/contractsData/USDCToken-address.json";
import USDCContract from "../components/contractsData/USDCToken.json"
import creedCoinAddress from "../components/contractsData/creedCoin-address.json";
import creedCoin from "../components/contractsData/creedCoin.json";
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { ToastContainer, toast } from "react-toastify";
import { formatUnits } from "ethers/lib/utils";
import { ExternalProvider } from "@ethersproject/providers";

// const { ethereum } = window;

// const getSignerMasterContract = () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const masterContract = new ethers.Contract(
//     creedMasterContractAddress.address,
//     creedMasterContract.abi,
//     signer
//   );
//   return masterContract;
// };

// const getProviderMasterContract = () => {
//   const providers = process.env.NEXT_PUBLIC_RPC_URL_TBNB;
//   const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
//   const masterContract = new ethers.Contract(
//     creedMasterContractAddress.address,
//     creedMasterContract.abi,
//     provider
//   );
//   return masterContract;
// };

const getSignerPresaleContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const presaleContract = new ethers.Contract(
    creedPresaleContractAddress.address,
    creedPresaleContract.abi,
    signer
  );
  return presaleContract;
};

const getProviderPresaleContract = () => {
  const providers = process.env.NEXT_PUBLIC_RPC_URL_TBNB;
  const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
  const presaleContract = new ethers.Contract(
    creedPresaleContractAddress.address,
    creedPresaleContract.abi,
    provider
  );
  return presaleContract;
};

const getSignerUSDTContrat = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
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

const getSignerCreedContrat = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const creedContracts = new ethers.Contract(
    creedCoinAddress.address,
    creedCoin.abi,
    signer
  );
  return creedContracts;
};


export const Store = createContext();

export const StoreProviders = ({ children }) => {

  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const [loader, setloader] = useState(false);

  // const [proposals, setProposals] = useState([]);

  // const [withdrawInvestedTokensRequests, setWithdrawInvestedTokensRequests] = useState([]);

  const [contractData, setContractData] = useState({
    ethBalance: 0,
    usdcBalance: 0,
    usdtBalance: 0,
    creedBalance: 0,
    raisedAmount: 0,
    tokenPrice: 0,
    totalSupply: 300000000000,
    isPreSaleActive: false,
    stakedTokens: 0,
    startTime: 0,
    duration: 0,
    rewardEarned: 0,
  });

  const [masterContractData, setMasterContractData] = useState({
    totalStakers: 0,
    totalStakeAmount: 0,
    totalRewards: 0,
    distributed: 0,
  });

  const [masterContractProposalData, setMasterContractProposalData] = useState([]);


  const GetValues = async () => {

    try {
      setloader(true);

      const sellPrice = await getProviderPresaleContract().salePrice();
      const raisedAmount = await getProviderPresaleContract().raisedAmount();
      const isPresale = await getProviderPresaleContract().isSale();

      setContractData(prevState => ({
        ...prevState,
        raisedAmount: formatUnits(raisedAmount, 18)?.toString(),
        tokenPrice: sellPrice?.toString(),
        isPreSaleActive: isPresale,
      }));

      if (isConnected) {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        const USDTBalance = await getSignerUSDTContrat().balanceOf(address);
        const USDCBalance = await getSignerUSDCContrat().balanceOf(address);
        const CREEDBalance = await getSignerCreedContrat().balanceOf(address);

        setContractData(prevState => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDTBalance, 18)?.toString(),
          usdtBalance: formatUnits(USDCBalance, 18)?.toString(),
          creedBalance: formatUnits(CREEDBalance, 18)?.toString(),
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


  const BuyWithUSDTandUSDC = async (payAmountInUSDT, tokens, isUSDT) => {
    try {

      let tokensss = ethers.utils.formatEther(tokens?.toString());
      console.log(+tokensss?.toString(),"tokenssstokenssstokensss")
      if (+tokensss?.toString() < 10) {
        return toast.error("Please buy minimum One (1) Doller");
      } else if (+tokensss?.toString() > 10000) {
        return toast.error("Please buy maximum One Thousand (1000) Doller");
      }

      console.log(tokens, "tokenstokenstokenstokenstokens");

      setloader(true);
      let amountInWei = ethers.utils.parseEther(payAmountInUSDT?.toString())
      if (isUSDT) {
        let tokenApprove = await getSignerUSDTContrat().approve(creedPresaleContractAddress.address, amountInWei);
        await tokenApprove.wait()

        const buying = await getSignerPresaleContract().buyWithUSDT(tokens, isUSDT);
        buying.wait();

      } else {

        let tokenApprove = await getSignerUSDCContrat().approve(creedPresaleContractAddress.address, amountInWei);
        await tokenApprove.wait()

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

      let tokensss = ethers.utils.parseEther(tokens?.toString());
      console.log(tokensss,"tokenssstokenssstokensss")

      if (tokensss < 10) {
        return toast.error("Please buy minimum One (1) Doller");
      } else if (tokensss > 10000) {
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


  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT STAKING ///////////////////////////////

  // const getMasterContractData = async () => {
  //   console.log("dasdfasdasddddddddddddddddddddd")
  //   const totalStakedTokens = await getProviderMasterContract().totalStakedTokens();
  //   const totalStakers = await getProviderMasterContract().totalInvesters();
  //   console.log(totalStakedTokens?.toString(),
  //     totalStakers?.toString(), "dadasdasdddddddddddddddddddddd")
  //   setMasterContractData(prevState => ({
  //     ...prevState,
  //     totalStakeAmount: ethers.utils.formatEther(totalStakedTokens?.toString())?.toString(),
  //     totalStakers: totalStakers?.toString(),
  //   }));
  // }

  // const addTokenToMetamask = async () => {
  //   try {
  //     // Check if window.ethereum object is available
  //     if (window.ethereum) {
  //       // Use ethereum.request method to add the token
  //       await window.ethereum.request({
  //         method: 'wallet_watchAsset',
  //         params: {
  //           type: 'ERC20',
  //           options: {
  //             address: creedCoinAddress?.address, // Token address
  //             symbol: '$ForceFinanceCoin', // Token symbol
  //             decimals: 18, // Token decimals
  //             image: 'https://example.com/creed-logo.png', // Token image URL
  //           },
  //         },
  //       });
  //       toast.success("Token added to Metamask!");
  //     } else {
  //       // Metamask not available, show error message
  //       toast.error("Metamask not available.");
  //     }
  //   } catch (error) {
  //     console.error("Failed to add token to Metamask: ", error);
  //     toast.error("Failed to add token to Metamask. Please try again later.");
  //   }
  // };

  // const copyToClipboard = () => {
  //   const tokenAddress = "0x2eD89D0027BB2490CbfAA8cac38DdA0d6e242Edf"; // Your token address
  //   navigator.clipboard.writeText(tokenAddress)
  //     .then(() => {
  //       toast.success("Token address copied to clipboard!");
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy: ", error);
  //     });
  // };

  // const GetInvestedTokensWithdrawRequests = async () => {

  //   setloader(true);

  //   let withdrawalDeta = [];

  //   const investedwithdrawRequesters = await getProviderMasterContract().getWithdrawRequesters();

  //   console.log(investedwithdrawRequesters, "investedwithdrawRequesters")
  //   console.log(investedwithdrawRequesters?.length?.toString(), "investedwithdrawRequesters")

  //   if (+investedwithdrawRequesters?.length?.toString() > 0) {
  //     for (let i = 0; i < investedwithdrawRequesters?.length; i++) {
  //       let userAddress = investedwithdrawRequesters[i];

  //       console.log(userAddress, "userAddress")

  //       let amountTobe = await getProviderMasterContract().invetedTokenWithdrawRequest(userAddress);

  //       console.log(amountTobe?.toString(), "amountTobeamountTobe")
  //       const Data = {
  //         address: userAddress,
  //         amount: amountTobe?.toString(),
  //       };

  //       withdrawalDeta.push(Data);
  //     }

  //     setWithdrawInvestedTokensRequests(withdrawalDeta);
  //   }

  //   setloader(false);
  // };

  // const GetTotalRewardEarned = async () => {
  //   try {

  //     setloader(true);

  //     let RewardAmount = [];

  //     const getTokensInvesters =
  //       await getProviderMasterContract().getTokensInvesters();

  //     for (let i = 0; i < getTokensInvesters.length; i++) {
  //       let userAddress = getTokensInvesters[i];

  //       let reward = await getProviderMasterContract().earned(
  //         userAddress
  //       );

  //       const Data = {
  //         amount: reward?.toString(),
  //       };
  //       RewardAmount.push(Data);
  //     }

  //     // Calculate total amount
  //     const totalAmount = RewardAmount.reduce((total, data) => {
  //       // Convert amount to number and add to total
  //       return total + parseFloat(data.amount);
  //     }, 0); // Initialize total with 0

  //     setMasterContractData(prevState => ({
  //       ...prevState,
  //       totalRewards: ethers.utils.formatEther(totalAmount?.toString())?.toString(),
  //     }));

  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     console.log(error);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const getStakedInfoByUser = async () => {

  //   console.log(address, isConnected, "addressaddress")
  //   if (isConnected) {
  //     let info = await getSignerMasterContract().stakingInfo(address?.toString());
  //     console.log(info, "addressaddrssssassadddess")
  //     console.log(info?.stakedTokens?.toString(), "addressaddrssssassadddess")
  //     console.log(info?.startTime?.toString(), "addressaddrssssassadddess")
  //     console.log(info.duration?.toString(), "addressaddrssssassadddess")
  //     console.log(info?.rewardEarned?.toString(), "addressaddrssssassadddess")

  //     setContractData(prevState => ({
  //       ...prevState,
  //       stakedTokens: ethers.utils.formatEther(info?.stakedTokens?.toString())?.toString(),
  //       startTime: info?.startTime?.toString(),
  //       duration: info.duration?.toString() * 1000,
  //       rewardEarned: ethers.utils.formatEther(info?.rewardEarned?.toString())?.toString(),
  //     }));
  //   }
  // }

  // const StakeTokensSend = async (amount, duration) => {

  //   setloader(true);
  //   if (!isConnected) {
  //     return setloader(false);
  //   }
  //   try {
  //     if (amount <= 0)
  //       return setloader(false), toast.error("Please enter amount");

  //     const tokens = ethers.utils.parseEther(amount?.toString());

  //     let balance = await getSignerCreedContrat().balanceOf(address);
  //     let allow = await getSignerCreedContrat().allowance(
  //       address,
  //       creedMasterContractAddress?.address
  //     );

  //     // console.log(allow?.toString(),balance?.toString(),"allowallowallow");

  //     if (+tokens?.toString() > +balance?.toString())
  //       return (
  //         setloader(false),
  //         toast.error(
  //           `Your available balance is ${Number(
  //             ethers.utils.formatEther(balance?.toString())
  //           )?.toFixed(5)} USDT`
  //         )
  //       );

  //     if (+tokens?.toString() > +allow?.toString()) {

  //       // console.log("condidtion True")

  //       let approve = await getSignerCreedContrat().approve(
  //         creedMasterContractAddress.address,
  //         tokens?.toString()
  //       );

  //       await approve.wait();
  //     }

  //     let respon = await getSignerMasterContract().stakeTokens(
  //       tokens?.toString(),
  //       duration
  //     );
  //     await respon.wait();
  //     await GetValues();
  //     // setWithdrawInvestedTokensRequests([]);
  //     toast.success("successfuly Staked"); // toast.success("successfuly Minted");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     console.log(error);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     return false;
  //   }
  // };

  // const unstakeTokensRequest = async () => {
  //   setloader(true);
  //   if (!isConnected) {
  //     return setloader(false);
  //   }
  //   try {
  //     // if (+contractData?.rewardEarned <= 0)
  //     //   return setloader(false), toast.error("Please wait for End Time");

  //     const response = await getSignerMasterContract().unstakeTokensRequest();
  //     await response.wait();
  //     // await GetValues();
  //     // setWithdrawRequests([]);
  //     // setWithdrawInvestedTokensRequests([]);
  //     // await GetWithdrawRequests();
  //     toast.success("successfuly Requested");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     console.log(error);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const withdrawStakedTokens = async () => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }

  //   const timestamp = Number(stakerData[0]?.stakingEndTime); // Unix timestamp to compare against
  //   const dateFromTimestamp = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  //   const currentDate = new Date();

  //   if (currentDate < dateFromTimestamp)
  //     return setloader(false), toast.error("please wait for unstaketime ");
  //   if (+stakerData[0]?.stakedTokens <= 0)
  //     return setloader(false), toast.error("your staked amount is zero");
  //   // let balance = await getSignerUSDTContrat().balanceOf(StakingContractAddress.address);
  //   // if (+balance?.toString() < +stakerData[0]?.stakedTokens) return setloader(false), toast.error("please wait for admin deposit");
  //   try {
  //     const response =
  //       await getSignerStakingContrat().withdrawRequestStakedTokens();
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("successfuly Withdraw");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  //   }
  // };

  // const rewardDistributed = async (amount) => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }
  //   try {
  //     // if (currentRound.toString() == 4) return setloader(false), setError(true), setMessage("All the rounds have finished"); //toast.error("All the rounds have finished");
  //     let tokens = ethers.utils.parseEther(amount);
  //     if (totalStakers == 0)
  //       return setloader(false), toast.error("Please wait for investers");
  //     const response = await getSignerStakingContrat().rewardDistributed(
  //       tokens?.toString()
  //     );
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("successfuly Distributed");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  //   }
  // };

  // const acceptWithdrawTokenRequest = async (addresses, amount) => {
  //   setloader(true);
  //   if (!isConnected) {
  //     return setloader(false);
  //   }
  //   try {
  //     let approve = await getSignerCreedContrat().approve(
  //       creedMasterContractAddress.address,
  //       amount?.toString()
  //     );
  //     await approve.wait();
  //     const response =
  //       await getSignerMasterContract().acceptWithdrawTokenRequest(addresses);
  //     await response.wait();
  //     // await GetValues();
  //     // setWithdrawRequests([]);
  //     // setWithdrawInvestedTokensRequests([]);
  //     // await GetWithdrawRequests();
  //     toast.success("successfuly Withdraw");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  //   }
  // };

  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////
  //////////////////////////////////////////  MASTER CONTRACT PROPOSAL ///////////////////////////////

  // const submitProposal = async (data) => {
  //   setloader(true);
  //   if (!isConnected) {
  //     return setloader(false);
  //   }
  //   try {
  //     const response =
  //       await getSignerMasterContract().submitProposal(data);
  //     await response.wait();
  //     // await GetValues();
  //     // setWithdrawRequests([]);
  //     // setWithdrawInvestedTokensRequests([]);
  //     // await GetWithdrawRequests();
  //     toast.success("successfuly Submited");
  //     GetAllProposalByArray();
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  //   }
  // };

  // const GetAllProposalByArray = async () => {
  //   try {
  //     setloader(true);
  //     let RewardAmount = [];

  //     const proposalCount = await getProviderMasterContract().proposalCount();

  //     for (let i = 1; i <= proposalCount?.toString(); i++) {

  //       console.log("proposalCount")

  //       let reward = await getProviderMasterContract().proposals(i);

  //       const decryptData = (ciphertext) => {
  //         try {
  //           const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret-key');
  //           const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //           return decryptedData;
  //         } catch (error) {
  //           console.error('Error decrypting data:', error);
  //           return null;
  //         }
  //       };

  //       let title = decryptData(reward?.description?.toString())

  //       const Data = {
  //         proposer: reward.proposer?.toString(),
  //         description: title,
  //         startTime: reward.startTime?.toString(),
  //         endTime: reward.endTime?.toString(),
  //         votes: reward.votes?.toString(),
  //         yesVotes: reward.yesVotes?.toString(),
  //         noVotes: reward.noVotes?.toString(),
  //         executed: reward.executed?.toString(),
  //         proposerId: i,
  //       };
  //       RewardAmount.push(Data);
  //     }
  //     setMasterContractProposalData(RewardAmount);
  //     setloader(false);
  //   }
  //   catch (error) {
  //     setloader(false);
  //     console.log(error);
  //   }
  // }

  // const addingVote = async (votingId, status) => {
  //   try {
  //     setloader(true);
  //     if (status === 0) {
  //       const totalProposalLists = await getSignerMasterContract().vote(votingId, false);
  //       totalProposalLists.wait();
  //       setloader(false);
  //     } else {
  //       const totalProposalLists = await getSignerMasterContract().vote(votingId, true);
  //       totalProposalLists.wait();
  //       setloader(false);
  //     }
  //     GetAllProposalByArray();
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     console.log(error);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const acceptInvestedWithdrawTokenRequest = async (addresses, amount) => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }
  //   try {
  //     let approve = await getSignerUSDTContrat().approve(
  //       StakingContractAddress?.address,
  //       amount?.toString()
  //     );
  //     await approve.wait();
  //     const response =
  //       await getSignerStakingContrat().acceptInvestedWithdrawTokenRequest(
  //         addresses
  //       );
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("successfuly Accepted");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  // toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const adminWithdraw = async (amount) => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }
  //   try {
  //     let tokens = ethers.utils.parseEther(amount);
  //     if (totalStakers == 0)
  //       return setloader(false), toast.error("Please wait for investers");
  //     const response = await getSignerStakingContrat().withdrawTokens(
  //       tokens?.toString()
  //     );
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("successfuly Withdraw");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  // toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const investmentStatusTrue = async () => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }
  //   try {
  //     const response = await getSignerStakingContrat().InvetmentStatus(true);
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("Status Changed");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  // toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };

  // const investmentStatusFalse = async () => {
  //   setloader(true);
  //   if (!isWalletConnected) {
  //     connectWallet();
  //     return setloader(false);
  //   }
  //   try {
  //     const response = await getSignerStakingContrat().InvetmentStatus(false);
  //     await response.wait();
  //     await GetValues();
  //     setWithdrawRequests([]);
  //     setWithdrawInvestedTokensRequests([]);
  //     await GetWithdrawRequests();
  //     toast.success("Status Changed");
  //     setloader(false);
  //   } catch (error) {
  //     setloader(false);
  //     toast.error(`${JSON.stringify(error.reason)}`);
  //     console.log(error);
  // toast.error(`${JSON.stringify(error.reason)}`);
  //   }
  // };
  // InvetmentStatus

  // useEffect(() => {
  //   GetValues();
  //   GetTotalRewardEarned();
  //   GetAllProposalByArray();
  //   GetInvestedTokensWithdrawRequests();
  // }, [address])

  return (
    <>
      <Store.Provider
        value={{
          loader,
          setloader,
          contractData,
          // addTokenToMetamask,
          // copyToClipboard,
          GetValues,
          getProviderPresaleContract,
          BuyWithUSDTandUSDC,
          BuyWithETH,
          presaleStart,
          presaleStop,
          getSignerPresaleContract,
          // unstakeTokensRequest,
          // StakeTokensSend,
          // getStakedInfoByUser,
          // masterContractData,
          // GetTotalRewardEarned,
          // getMasterContractData,
          // submitProposal,
          // proposals,
          // masterContractProposalData,
          // GetInvestedTokensWithdrawRequests,
          // acceptWithdrawTokenRequest,
          // addingVote,
          // withdrawInvestedTokensRequests
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
