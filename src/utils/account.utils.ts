import * as models from "models";

export function calculateTokenBalance(
  ata?: models.ITokenAccount,
  decimals?: number
): number {
  const ataBalance = Number(
    ata?.ataInfo?.parsed.info?.tokenAmount
      ? ata?.ataInfo?.parsed.info.tokenAmount.uiAmount
      : 0
  );

  const totalBalance = ataBalance / Math.pow(10, decimals ? decimals : 0);

  return totalBalance;
}
