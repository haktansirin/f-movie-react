import { useState } from "react";
import { useParams } from "react-router-dom";
import http from "../utilities/axios";
import MovieDetail from "../components/MovieDetail/MovieDetail";

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);

  useState(() => {
    http
      .get(`/movie/${movieId}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    http
      .get(`/movie/${movieId}/images`)
      .then((res) => {
        setMovieImages(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    http
      .get(`/movie/${movieId}/credits`)
      .then((res) => {
        setMovieCast(res.data.cast);
        setMovieCrew(res.data.crew);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MovieDetail
      movie={movie}
      movieImages={movieImages}
      movieCast={movieCast}
      movieCrew={movieCrew}
    />
  );
};

export default Movie;
