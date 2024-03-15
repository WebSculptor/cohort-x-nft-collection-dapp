import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import multicallAbi from "../json/multicall.json";

const { VITE_MULTICALL_ADDRESS } = import.meta.env;

const useMintNft = async (toAddress, tokenId) => {
  const { address } = useWeb3ModalAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      // Connect to Ethereum network
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Instantiate contract
      const contract = new ethers.Contract(
        VITE_MULTICALL_ADDRESS,
        multicallAbi,
        address
      );

      // Mint NFT
      await contract.safeMint(toAddress, tokenId, {
        value: ethers.parseEther("0.01"),
      });

      alert("NFT minted successfully!");
    } catch (err) {
      setIsError("Error minting NFT: " + err.message);
    } finally {
      setIsLoading(false);
    }
  }, [address, toAddress, tokenId]);

  return { isLoading, isError };
};

export default useMintNft;
