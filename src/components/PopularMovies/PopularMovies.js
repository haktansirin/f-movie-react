import PopularMoviesCard from "./PopularMoviesCard";
import SectionTitle from "../Layouts/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./PopularMovies.css";
import "swiper/css";
import "swiper/css/navigation";
import "../Swiper/SwiperNavigation.css";

const PopularMovies = ({ movies }) => {
  return (
    <div className="popular-movies">
      <SectionTitle>What's Popular</SectionTitle>
      {movies ? (
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <PopularMoviesCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default PopularMovies;
