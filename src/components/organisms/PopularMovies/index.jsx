import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Badge from '../../atoms/Badge';
import MovieItem from '../../molecules/MovieItem';
import useWindowSize from '../../../hooks/useWindowSize';
import '/node_modules/swiper/swiper-bundle.min.css';
import '/node_modules/swiper/swiper.min.css';
import { useCallback, useEffect, useState } from 'react';
import { getPopularMoviesAPI } from '../../../services/movies';

const PopularMovies = () => {
  const width = useWindowSize();

  const [populars, setPopulars] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getPopularMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getPopularMoviesAPI();
      setPopulars(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <section className="w-full h-fit md:mb-0 mb-4">
      <div className="flex justify-start items-center gap-2 md:mb-4 mb-2">
        <h3 className="text-lg font-semibold">Popular on MOWEEE</h3>
        <Badge href="/popular/movies" />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={width < 700 ? 2 : 4}
        spaceBetween={width < 500 ? 8 : 16}
        navigation
        className="flex w-full md:h-72 h-40"
      >
        {populars.map((trending) => (
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

export default PopularMovies;
