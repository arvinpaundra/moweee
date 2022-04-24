import Badge from '../../atoms/Badge';
import MovieItem from '../../molecules/MovieItem';
import useWindowSize from '../../../hooks/useWindowSize';
import { useCallback, useEffect, useState } from 'react';
import { getTrendingMoviesAPI } from '../../../services/movies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import cx from 'classnames';

const TrendingMovies = () => {
  const [trendings, setTrendings] = useState([]);
  const [timeWindow, setTimeWindow] = useState('day');
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [active, setActive] = useState('day');

  const width = useWindowSize();

  const getTrendingMovies = useCallback(async (time_window) => {
    try {
      setIsLoading(true);
      const data = await getTrendingMoviesAPI(time_window);
      setTrendings(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onFilter = (event) => {
    if (event.target.innerText === 'Today') {
      setTimeWindow('day');
      setActive('day');
    }

    if (event.target.innerText === 'Week') {
      setTimeWindow('week');
      setActive('week');
    }
  };

  useEffect(() => {
    getTrendingMovies(timeWindow);
  }, [getTrendingMovies, timeWindow]);

  const filterButton = cx({
    'md:px-4 px-2 py-1 md:text-base text-sm border border-zdarkblue rounded-full hover:bg-zdarkblue hover:text-zwhite': true,
  });

  return (
    <section className="w-full h-fit md:mb-8 mb-4">
      <div className="flex justify-start items-center gap-2 md:mb-4 mb-2">
        <h3 className="text-lg font-semibold">Trending movies</h3>
        <Badge href="/trending/movies" />
      </div>
      <div className="flex gap-2 md:mb-4 mb-2">
        <button
          className={`${filterButton} ${active === 'day' ? 'active' : 'bg-zwhite text-zdarkblue'}`}
          onClick={onFilter}
        >
          Today
        </button>
        <button
          className={`${filterButton} ${active === 'week' ? 'active' : 'bg-zwhite text-zdarkblue'}`}
          onClick={onFilter}
        >
          Week
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={width < 700 ? 2 : 4}
        spaceBetween={width < 500 ? 8 : 16}
        navigation
        className="flex w-full md:h-72 h-40"
      >
        {trendings.map((trending) => (
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

export default TrendingMovies;
