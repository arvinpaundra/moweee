import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Badge from '../../atoms/Badge';
import MovieItem from '../../molecules/MovieItem';
import useWindowSize from '../../../hooks/useWindowSize';
import '/node_modules/swiper/swiper-bundle.min.css';
import '/node_modules/swiper/swiper.min.css';
import { useCallback, useEffect, useState } from 'react';
import { getTopRatedMoviesAPI } from '../../../services/movies';

const TopRatedMovies = () => {
  const width = useWindowSize();

  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getTopRatedMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTopRatedMoviesAPI();
      setTopRated(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  return (
    <section className="w-full h-fit md:hidden">
      <div className="flex justify-start items-center gap-2 md:mb-4 mb-2">
        <h3 className="text-lg font-semibold">Top rated</h3>
        <Badge href="/top-rated/movies" />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={width < 700 ? 2 : 4}
        spaceBetween={width < 500 ? 8 : 16}
        navigation
        className="w-full md:h-72 h-40"
      >
        {topRated.map((trending) => (
          <SwiperSlide key={trending.id} className="overflow-hidden rounded-xl">
            <MovieItem
              id={trending.id}
              poster_path={trending.poster_path}
              title={trending.title}
              vote_average={trending.vote_average}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopRatedMovies;
