import "./nft.styles.css";

const NFTCard = ({ NFTs }) => {
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
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NFTCard;
