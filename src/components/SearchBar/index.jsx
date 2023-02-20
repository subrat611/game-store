import "./searchbar.scss";

export default function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <input
        placeholder="search here..."
        type="text"
        className="search-input"
      />
    </div>
  );
}
