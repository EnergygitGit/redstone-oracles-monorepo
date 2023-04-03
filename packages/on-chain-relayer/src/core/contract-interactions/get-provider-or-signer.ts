import { providers, Wallet } from "ethers";
import { config } from "../../config";

export const getProvider = () => {
  const { rpcUrl, chainName, chainId } = config;

  if (process.env.NODE_ENV === "test") {
    const { ethers } = require("hardhat");
    return ethers.provider;
  }

  return new providers.StaticJsonRpcProvider(rpcUrl, {
    name: chainName,
    chainId: Number(chainId),
  });
};

export const getSigner = () => {
  const provider = getProvider();
  const signer = new Wallet(config.privateKey, provider);
  return signer;
};