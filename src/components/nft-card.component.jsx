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
        NFTs.map((nft, idx) => {
          return (
            <div className="nft-card" key={idx}>
            <div className="img-wrapper">
                <img
                  src={nft.media[0].gateway}
                  className="nft-img"
                  alt={`nft ${nft.title}`}
                />
                </div>
              <div className="details-wrapper">
                <h4 className="card-title">{nft.title}</h4>
                <div className="details-card">
                <p>Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <button onClick={() => popupContent(nft)} className="nft-button">View more</button>
                </div>
              </div>
            </div>
          )
        })}
      {toggle && (
        <div className="popup-container" onClick={popupContent}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <button onClick={popupContent}>X</button>
            </div>
            {popup.map((pop) => {
              return (
                <div>
                  <img
                    src={pop.media[0].gateway}
                    className="pop-img"
                    alt={`nft ${pop.title}`}
                  />
                  <div>
                  <h1>{pop.title}</h1>
                  <p>{pop.description}</p>
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://etherscan.io/token/${pop.contract.address}`}
                      className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer"
                    >
                      View on openSea
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://etherscan.io/token/${pop.contract.address}`}
                      className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer"
                    >
                      View on etherscan
                    </a>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTCard;
