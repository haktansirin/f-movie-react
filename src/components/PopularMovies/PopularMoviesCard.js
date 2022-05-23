import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emptyBannerH from "../../assets/img/banner-empty-horizontal.jpg";
import Image from "../Image/Image";

const PopularMoviesCard = ({
  movie: { id, title, backdrop_path, vote_average },
}) => {
  const [voteClass, setVoteClass] = useState("");

  useEffect(() => {
    if (vote_average < 4) {
      setVoteClass("low");
    } else if (vote_average < 7) {
      setVoteClass("middle");
    } else {
      setVoteClass("high");
    }
  }, [vote_average]);

  return (
    <div className="popular-movie-card" title={title}>
      <div className="popular-movie-image">
        <Image src={backdrop_path} alt={title} placeholder={emptyBannerH} />
        <div className={`popular-movie-vote ${voteClass}`}>{vote_average}</div>
      </div>
      <div className="popular-movie-name">{title}</div>
      <Link to={`/movie/${id}`} className="movie-card-link"></Link>
    </div>
  );
};

export default PopularMoviesCard;
