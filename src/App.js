import React, { useState } from "react";
import NFTCard from "./components/nft-card.component";
import "./App.styles.css";

const App = () => {
  const [NFTs, setNFTs] = useState([]);
  const [walletAddress, setWalletAddress] = useState(
    "0x82888A271FAe31794493B9f95d5f0F7175b810e3"
  );

  const [active, setActive] = useState(false);

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

 

  const handleClick = () => {
    setActive(!active);
    fetchInfo();
    setWalletAddress("")
  };

  return (
    <div className="main">
      <div className="inputwallet">
        <h2>Add Address from OpenSea or click default ⬇️ </h2>
        <input
          value={walletAddress}
          type={"search"}
          placeholder="Add your wallet address"
          onChange={(e) => {
            setWalletAddress(e.target.value);
          }}
        />
        <button
          className="input-btn"
          onClick={handleClick}
          style={{backgroundColor: active ? "green" : "none", color: active ? "white" : "none"}}
        >
          {" "}
          Get NFTs
        </button>
      </div>
      <NFTCard NFTs={NFTs} />
    </div>
  );
};

export default App;
