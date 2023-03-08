import React, { useEffect, useState } from "react";
import NFTCard from "./components/nft-card.component";
import './App.styles.css'

const App = () => {
  const [NFTs, setNFTs] = useState([]);
  const [walletAddress, setWalletAdress] = useState(
    "0x82888A271FAe31794493B9f95d5f0F7175b810e3"
  );

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const apiKey = "hI9DDDu2O5rwfGIY5dSAA7SYVUkbzYF2";
  const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
  const fetchURL = `${baseURL}?owner=${walletAddress}`;

  const fetchInfo = async () => {
    return await fetch(fetchURL, requestOptions)
      .then((response) => response.json())
      .then((nfts) => setNFTs(nfts.ownedNfts));
  };

  useEffect(() => {
    fetchInfo();
  });

  return (
    <div className="main">
    <div className="inputwallet">
    <h1>Paste Wallet Adrress link⬇️ </h1>
      <input
      className="inputwallet"
        value={walletAddress}
        type={"search"}
        placeholder="Add your wallet address"
        onChange={(e) => {
          setWalletAdress(e.target.value);
        }}
      />
      </div>
      <NFTCard NFTs={NFTs} />
    </div>
  );
};

export default App;
