import "./nft-card.styles.css";
import { useState } from "react";

const NFTCard = ({ NFTs }) => {
  const [popup, setPopup] = useState([]);
  const [toggle, setToggle] = useState(false);
  const popupContent = (nft) => {
    setPopup([nft]);
    setToggle(!toggle);
  };
  return (
    <div className="nft-container">
      {NFTs.length &&
        NFTs.map((nft) => {
          return (
            <div className="nft-card" key={nft.id.tokenId}>
              <h1>{nft.title}</h1>
              <div>
                <img
                  src={nft.media[0].gateway}
                  className="nft-img"
                  alt={`nft ${nft.title}`}
                />
              </div>
              <div>
                <p>Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p>{nft.description?.substr(0, 150)}</p>
                <button onClick={() => popupContent(nft)}>open</button>
              </div>
            </div>
          );
        })}
     {toggle &&  <div className="popup-container" onClick={popupContent}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <button onClick={popupContent}>X</button>
          </div>
            {popup.map((pop) => {
              return (
                <div>
                  <h1>{pop.title}</h1>
                  <p>{pop.description}</p>
                </div>
              );
            })}
        </div>
      </div>}
    </div>
  );
};

export default NFTCard;
