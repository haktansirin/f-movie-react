import { useState } from "react";
import emptyPosterV from "../../assets/img/banner-empty-vertical.jpg";
import emptyPosterH from "../../assets/img/banner-empty-horizontal.jpg";
import SectionTitle from "../Layouts/SectionTitle";
import dateFormatter from "../../utilities/dateFormatter";
import Image from "../Image/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiOutlineHeart,
  AiOutlineLink,
  AiOutlineCalendar,
} from "react-icons/ai";
import "./Movie.css";

const MovieDetail = ({
  movie: {
    poster_path,
    title,
    overview,
    genres,
    release_date,
    homepage,
    vote_average,
  },
  movieImages: { backdrops },
  movieCast,
  movieCrew,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="movie-detail">
      <div className="movie-detail-image">
        <Image
          src={poster_path}
          alt={title}
          placeholder={emptyPosterV}
          className="w-100 radius-1"
        />
        <ul className="movie-detail-info">
          <li className="movie-detail-info-item">
            <div className="movie-detail-info-icon">
              <AiOutlineCalendar />
            </div>
            {dateFormatter(release_date)}
          </li>
          <li className="movie-detail-info-item">
            <div className="movie-detail-info-icon">
              <AiOutlineHeart />
            </div>
            10/{vote_average}
          </li>
          <li className="movie-detail-info-item">
            <div className="movie-detail-info-icon">
              <AiOutlineLink />
            </div>
            <a href={homepage} target="_blank" rel="noreferrer">
              Web Site
            </a>
          </li>
        </ul>
      </div>
      <div className="movie-detail-content">
        <div className="movie-detail-title">{title}</div>
        {overview ? (
          <p className="movie-detail-descripton">{overview}</p>
        ) : null}
        {movieCast && movieCast.length !== 0 ? (
          <>
            <SectionTitle>CAST</SectionTitle>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                380: {
                  slidesPerView: 2,
                },
                568: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                1366: {
                  slidesPerView: 5,
                },
                1600: {
                  slidesPerView: 6,
                },
              }}
            >
              {movieCast.map((cast) => (
                <SwiperSlide key={cast.id}>
                  <div className="movie-cast-item">
                    <Image
                      src={cast.profile_path}
                      alt={cast.name}
                      placeholder={emptyPosterH}
                      className="movie-cast-image"
                    />
                    <div className="movie-cast-name">{cast.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : null}
        {movieCrew && movieCrew.length !== 0 ? (
          <>
            <SectionTitle>CREW</SectionTitle>
            <ul className={`movie-detail-crew ${isShowMore ? "" : "hidden"}`}>
              {movieCrew.map((crew) => (
                <li key={crew.credit_id}>
                  <div className="movie-detail-crew-title">{crew.job}</div>
                  {crew.name}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="button-primary mx-auto mt-3"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? "Show less" : "Show more"}
            </button>
          </>
        ) : null}
        {backdrops && backdrops.length !== 0 ? (
          <>
            <SectionTitle>IMAGES</SectionTitle>
            <Swiper
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                568: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                1366: {
                  slidesPerView: 4,
                },
                1600: {
                  slidesPerView: 5,
                },
              }}
            >
              {backdrops.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image.file_path}
                    alt={title}
                    placeholder={emptyPosterH}
                    className="w-100 radius-1"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : null}
        {genres && genres.length !== 0 ? (
          <>
            <SectionTitle>GENRES</SectionTitle>
            <ul className="movie-detail-genres">
              {genres.map((genre) => (
                <li key={genre.id} className="movie-detail-genres-item">
                  {genre.name}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MovieDetail;
