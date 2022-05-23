import { Link } from "react-router-dom";
import dateFormatter from "../../utilities/dateFormatter";
import emptyPosterV from "../../assets/img/banner-empty-vertical.jpg";
import Image from "../Image/Image";

const SearchResultCard = ({
  movie: { poster_path, title, id, release_date },
}) => {
  return (
    <div className="movie-search-result-card">
      <Image
        src={poster_path}
        placeholder={emptyPosterV}
        alt={title}
        className="movie-search-result-image"
      />
      <div className="movie-search-result-content">
        <div className="movie-search-result-name">{title}</div>
        <p> {dateFormatter(release_date)}</p>
        <Link to={`/movie/${id}`} className="movie-card-link"></Link>
      </div>
    </div>
  );
};

export default SearchResultCard;
