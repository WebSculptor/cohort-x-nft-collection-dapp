import { SUPPORTED_CHAIN } from "@/connections";
import { getProposalsContract, getProvider } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isSupportedChain = (chainId: number) =>
  Number(chainId) === SUPPORTED_CHAIN;

export const getReadWriteBallotContract = async (provider) => {
  const readWriteProvider = getProvider(provider);

  const signer = await readWriteProvider.getSigner();

  return getProposalsContract(signer);
};

export const shortenAddress = (address: string) => {
  const [shortenedAddress, setShortenedAddress] = useState("");

  useEffect(() => {
    if (address && typeof address === "string" && address.length === 42) {
      const shortened =
        address.substring(0, 6) + "...." + address.substring(38);
      setShortenedAddress(shortened);
    } else {
      setShortenedAddress("");
    }
  }, [address]);

  return shortenedAddress;
};
