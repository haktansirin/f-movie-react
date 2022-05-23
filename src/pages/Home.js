import { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import PopularMovies from "../components/PopularMovies/PopularMovies";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import http from "../utilities/axios";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    http
      .get("/movie/popular")
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <HomeSlider>
      <Search />
      <PopularMovies movies={popularMovies} />
    </HomeSlider>
  );
};

export default Home;
