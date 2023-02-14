import React from "react";
import { Movie } from "../../Types/Types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import PopularMoviesHorizontal from "./PopularMoviesHorizontal";
import MovieSlide from "./MovieSlide";

type Props = {
  movies: Movie[] | null;
};
function DiscoverMovies({ movies }: Props) {
  return (
    <div className="discoverMovies">
      <h1>Discover</h1>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        speed={600}
        slidesPerView={1}
        className="swiperContainer"
        loop
      >
        {movies?.map((movie) => (
          <SwiperSlide className="slide">
            <MovieSlide movie={movie}></MovieSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DiscoverMovies;
