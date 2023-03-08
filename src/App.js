import React, { useEffect, useState } from "react";
import NFTCard from "./components/nft-card.component";
import './App.styles.css'

const App = () => {
  const [NFTs, setNFTs] = useState([]);
  const [walletAddress, setWalletAdress] = useState(
    "0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1"
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
      <input
      className="inputwallet"
        value={walletAddress}
        type={"text"}
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
