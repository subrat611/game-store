import { useEffect, useState } from "react";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchGames, setSearchGames] = useState([]);

  useEffect(() => {
    if (games.length <= 0) loadGames();
    searchForGames();
  }, []);

  async function loadGames() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    if (games.length <= 0) {
      fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        options
      )
        .then((response) => response.json())
        .then((response) => setGames(response))
        .catch((err) => console.error(err));
    }
  }

  function searchForGames(searchText) {
    if (searchText !== "") {
      const searchListGames = games.filter(
        (game) => game.title.toLowerCase().indexOf(searchText) !== -1
      );
      setSearchGames(searchListGames);
    } else setSearchGames([]);
  }

  return (
    <div className="home-page-wrapper">
      <SearchBar searchForGames={searchForGames} />
      <ul className="game-lists-wrapper">
        {games.length > 0 &&
          searchGames.length <= 0 &&
          games.map((game) => <GameList game={game} key={game.id} />)}

        {searchGames.length > 0 &&
          searchGames.map((game) => <GameList game={game} key={game.id} />)}

        {games.length <= 0 && searchGames.length <= 0 && (
          <p className="game-list-loader">Loading...</p>
        )}
      </ul>
    </div>
  );
}
