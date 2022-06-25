import { useState } from "react";
import http from "../../utilities/axios";
import "./Search.css";
import SearchResult from "./SearchResult";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const popularMovieTags = [
    {
      id: 1,
      name: "batman",
    },
    {
      id: 2,
      name: "spiderman",
    },
    {
      id: 3,
      name: "memory",
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);

  function searchMovie() {
    http
      .get(`/search/movie?query=${searchValue}`)
      .then((res) => {
        setSearchResults(res.data.results);
        setIsShowResult(true);
        setSearchValue("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function closeSearchResult() {
    setIsShowResult(false);
  }

  return (
    <div className="movie-search-wrapper">
      <div className="movie-search">
        <input
          type="text"
          value={searchValue}
          className="movie-search-input"
          placeholder="Search for a movie, tv show, person..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="button"
          className={`movie-search-button ${
            searchValue.length > 0 ? "active" : ""
          }`}
          onClick={searchMovie}
        >
          <span>Search</span>
          <FiSearch />
        </button>
      </div>
      <ul className="movie-search-tags">
        <li>
          <strong>Trending:</strong>
        </li>
        {popularMovieTags.map((tag) => (
          <li
            key={tag.id}
            className="movie-search-tags-item"
            onClick={() => setSearchValue(tag.name)}
          >
            #{tag.name}
          </li>
        ))}
      </ul>
      {isShowResult && (
        <SearchResult
          movies={searchResults}
          closeSearchResult={closeSearchResult}
        />
      )}
    </div>
  );
};

export default Search;
