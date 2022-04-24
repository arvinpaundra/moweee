import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import MovieItemNowPlaying from '../../molecules/MovieItemNowPlaying';
import Badge from '../../atoms/Badge';
import useWindowSize from '../../../hooks/useWindowSize';
import '/node_modules/swiper/swiper-bundle.min.css';
import '/node_modules/swiper/swiper.min.css';
import { useCallback, useEffect, useState } from 'react';
import { getNowPlayingMoviesAPI } from '../../../services/movies';

const MoviesNowPlaying = () => {
  const width = useWindowSize();

  const [nowPlaying, setNowPlaying] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getNowPlayingMovies = useCallback(async () => {
    try {
      const data = await getNowPlayingMoviesAPI();
      setNowPlaying(data);
    } catch (err) {}
  }, []);

  useEffect(() => {
    getNowPlayingMovies();
  }, [getNowPlayingMovies]);

  return (
    <section className="w-full h-fit md:mb-4 mb-2">
      <div className="mb-4">
        <h3 className="text-lg font-semibold inline mr-2">Now playing</h3>
        <Badge href="/now-playing/movies" />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={width < 700 ? 1 : 2}
        spaceBetween={width < 500 ? 8 : 16}
        navigation
        className="flex w-full md:h-72 h-40"
      >
        {nowPlaying.map((item) => (
          <SwiperSlide key={item.id} className="overflow-hidden rounded-xl">
            <MovieItemNowPlaying
              title={item.title}
              vote_average={item.vote_average}
              id={item.id}
              backdrop_path={item.backdrop_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MoviesNowPlaying;
