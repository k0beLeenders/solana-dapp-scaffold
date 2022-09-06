import * as models from "models";
import { useSolanaFacade } from "state/solana";

export function useGroupedAuxTokenAccounts() {
  const { walletInfo } = useSolanaFacade();

  const groupedTokenAccounts = new Map<string, models.ISplAccounts>();

  walletInfo.tokenAccounts.forEach((tokenAccount: any) => {
    const mint = tokenAccount.account.data?.parsed?.info?.mint;
    const ataAccount = walletInfo.ataMap.get(mint);

    if (ataAccount && tokenAccount.pubkey.toString() !== ataAccount.pubkey) {
      groupedTokenAccounts.set(mint, tokenAccount);
    }
  });
  return groupedTokenAccounts;
}
