import "./gamelist.scss";

export default function GameList({ game }) {
  return (
    <li className="game-list">
      <div className="game-card">
        <div className="game-card-img">
          <img src={game.thumbnail} alt="game-image" />
        </div>
        <div className="game-card-body">
          <div className="body-genre">
            <span>{game.genre}</span>
            <span>{game.platform}</span>
          </div>
          <div className="body-title">
            <p>{game.title}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
