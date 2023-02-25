import "./gamelist.scss";

export default function GameList() {
  return (
    <li className="game-list">
      <div className="game-card">
        <div className="game-card-img">
          <img
            src="https://www.freetogame.com/g/458/thumbnail.jpg"
            alt="game-image"
          />
        </div>
        <div className="game-card-body">
          <div className="body-genre">
            <span>MMORPG</span>
            <span>platform</span>
          </div>
          <div className="body-title">
            <p>League of Angels - Heaven's Fury</p>
          </div>
        </div>
      </div>
    </li>
  );
}
