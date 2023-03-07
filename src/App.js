import "./App.css";
import React, { useEffect, useState } from "react";

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
      .then((d) => setNFTs(d.ownedNfts));
  };
  useEffect(() => {
    fetchInfo();
  });
  return (
    <div>
      {NFTs.length &&
        NFTs.map((nft) => {
          return (
            <div>
              <h1>{nft.title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default App;
