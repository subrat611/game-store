import { useEffect, useState } from "react";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      loadGames();
    }, 1000);
  }, []);

  async function loadGames() {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }

  return (
    <div className="home-page-wrapper">
      <SearchBar />
      <ul className="game-lists-wrapper">
        {games.length > 0 ? (
          games.map((game) => <GameList key={game.id} game={game} />)
        ) : (
          <li className="game-list-loader">Loading...</li>
        )}
      </ul>
    </div>
  );
}
