import { Address } from "types";

export function getNetworkName(chainId: number): string {
  switch (chainId) {
    case 1:
      return "Ethereum";
    case 10:
      return "Optimism";
  }
  return "Ethereum";
}

export function getEtherscanLink(address: Address): string {
  switch (address.network) {
    case "optimism":
      return "https://optimistic.etherscan.io/address/" + address.address;
  }
  return "https://etherscan.io/address/" + address.address;
}
