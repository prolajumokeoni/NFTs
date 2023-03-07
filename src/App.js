import React, { useEffect, useState } from "react";
import NFTCard from "./components/nft-card.component";

const App = () => {
  const [NFTs, setNFTs] = useState([]);

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const apiKey = "hI9DDDu2O5rwfGIY5dSAA7SYVUkbzYF2";
  const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
  const ownerAddr = "0xf54c9A0E44a5F5aFd27C7aC8a176A843b9114F1d";
  const fetchURL = `${baseURL}?owner=${ownerAddr}`;
  const fetchInfo = async () => {
    return await fetch(fetchURL, requestOptions)
      .then((response) => response.json())
      .then((nfts) => setNFTs(nfts.ownedNfts));
  };
  useEffect(() => {
    fetchInfo();
  });
  console.log(NFTs)
  return (
    <div>
      <NFTCard NFTs={NFTs} />
    </div>
  );
};

export default App;
