import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./gamedetails.scss";

export default function GameDetails() {
  const [gameDetails, setGameDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchGameDetails();
  }, []);

  async function fetchGameDetails() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setGameDetails(response))
      .catch((err) => console.error(err));
  }

  return gameDetails ? (
    <GameDetailsData
      title={gameDetails.title}
      thumbnail={gameDetails.thumbnail}
      desc={gameDetails.description}
      gameUrl={gameDetails.game_url}
      genre={gameDetails.genre}
      platform={gameDetails.platform}
      publisher={gameDetails.publisher}
      developer={gameDetails.developer}
      releaseDate={gameDetails.release_date}
      sysReq={gameDetails.minimum_system_requirements}
      screenshots={gameDetails.screenshots}
    />
  ) : (
    <h2 className="loader">Loading...</h2>
  );
}

function GameDetailsData({ title, thumbnail, desc, sysReq }) {
  return (
    <div className="game-details-wrapper">
      <div className="game-details-bg">
        <img src={thumbnail} alt="background image" />
      </div>
      <div className="details-wrapper">
        <div className="details-container">
          <h1 className="details-title">{title}</h1>
          <div className="carousel-wrapper">{/* carousel */}</div>
          <div className="details-desc">
            <p className="long-desc">{desc}</p>
            {sysReq && (
              <div>
                <h2>Minimum System Requirements</h2>
                <ul className="requirements-wrapper">
                  <li className="requirement-list">
                    <p className="requirement">OS : {sysReq.os}</p>
                  </li>
                  <li className="requirement-list">
                    <p className="requirement">
                      Processor : {sysReq.processor}
                    </p>
                  </li>
                  <li className="requirement-list">
                    <p className="requirement">Memory : {sysReq.memory}</p>
                  </li>
                  <li className="requirement-list">
                    <p className="requirement">Graphics : {sysReq.graphics}</p>
                  </li>
                  <li className="requirement-list">
                    <p className="requirement">Storage : {sysReq.storage}</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="details-price-container">
          <h1>Title</h1>
        </div>
      </div>
    </div>
  );
}
