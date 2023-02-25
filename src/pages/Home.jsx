import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <SearchBar />
      <ul className="game-lists-wrapper">
        <GameList />
      </ul>
    </div>
  );
}
