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
      {NFTs.map((nft, idx) => {
        return (
          <div className="nft-card" key={idx}>
            <div className="img-wrapper">
              {nft.media[0].gateway !== "" ? (
                <img
                  src={nft.media[0].gateway}
                  className="nft-img"
                  alt={`nft ${nft.title}`}
                />
              ) : (
                <img
                  src={`https://robohash.org/${idx}?set=set2&size=180x180`}
                  alt={`nft ${nft.title}`}
                />
              )}
            </div>
            <div className="details-wrapper">
              <h4 className="card-title">{nft.contractMetadata.name}</h4>
              <div className="details-card">
                <p>Id: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <button
                  onClick={() => popupContent(nft)}
                  className="nft-button"
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {toggle && (
        <div className="popup-container" onClick={popupContent}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <button className="close" onClick={popupContent}>
                X
              </button>
            </div>
            {popup.map((pop, idx) => {
              return (
                <div className="popup-wrapper" key={idx}>
                  <div className="pop-left">
                    {pop.media[0].gateway !== "" ? (
                      <img
                        src={pop.media[0].gateway}
                        className="pop-img"
                        alt={`pop ${pop.title}`}
                      />
                    ) : (
                      <img
                        className="pop-img"
                        src={`https://robohash.org/${idx}?set=set2`}
                        alt={`pop ${pop.title}`}
                      />
                    )}
                  </div>
                  <div className="pop-div">
                    <h2>{pop.contractMetadata.name}</h2>
                    {pop.description !== "" ? (
                      <p>{pop.description}</p>
                    ) : (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut tenetur in, aspernatur aperiam facere
                        exercitationem? Atque id officiis beatae in vel soluta
                        quia vero suscipit dolor, ex enim. Est, ipsa.
                      </p>
                    )}

                    <div className="pop-links">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://opensea.io/assets/${
                          pop.contract.address
                        }/${pop.title.substr(1, pop.title.length - 1)}`}
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
