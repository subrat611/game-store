import "./searchbar.scss";

export default function SearchBar({ searchForGames }) {
  function handleSearchText(searchText) {
    searchForGames(searchText);
  }

  return (
    <div className="search-bar-wrapper">
      <input
        placeholder="search here..."
        type="text"
        className="search-input"
        onChange={(e) => handleSearchText(e.target.value.toLowerCase())}
      />
    </div>
  );
}
