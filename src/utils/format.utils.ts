import * as anchor from "@project-serum/anchor";

export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export const formatNonUSD = (number: number) =>
  `${number.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;

export const changeFloatingPoint = (amount: number, decimals: number) => {
  return amount / Math.pow(10, decimals);
};

export const changeFloatingPointBN = (amount: anchor.BN, decimals: number) => {
  const decimalsBN = new anchor.BN(Math.pow(10, decimals));
  return (
    amount.div(decimalsBN).toNumber() +
    amount.mod(decimalsBN).toNumber() / decimalsBN.toNumber()
  );
};
