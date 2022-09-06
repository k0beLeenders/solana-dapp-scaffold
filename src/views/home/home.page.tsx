import React, { FC } from "react";

import { useSolanaFacade } from "state/solana";

import * as styled from "./home.styles";

export interface IHomeView {}

export const HomeView: FC<IHomeView> = () => {
  const { walletInfo } = useSolanaFacade();
  return (
    <styled.Home>
      <h1>Solana React Scaffold</h1>
      <p>Token accounts connected: {walletInfo?.tokenAccounts?.length}</p>
    </styled.Home>
  );
};
