import SearchResultCard from "./SearchResultCard";
import AlertMessage from "../AlertMessage/AlertMessage";
import "./SearchResult.css";

const SearchResult = ({ movies, closeSearchResult }) => {
  return (
    <div className="movie-search-result-wrapper">
      <button
        type="button"
        className="button-primary"
        onClick={closeSearchResult}
      >
        Back to search
      </button>
      <div className="movie-search-result">
        {movies.map((movie) => (
          <SearchResultCard key={movie.id} movie={movie} />
        ))}
      </div>
      {movies.length === 0 && (
        <AlertMessage>
          There are no movies that matched your query.
        </AlertMessage>
      )}
    </div>
  );
};

export default SearchResult;
