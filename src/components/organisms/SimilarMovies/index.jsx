import { Swiper, SwiperSlide } from 'swiper/react';
import MovieItem from '../../molecules/MovieItem';
import useWindowSize from '../../../hooks/useWindowSize';
import { Navigation } from 'swiper';
import { useCallback, useEffect, useState } from 'react';
import { getRecommendationMoviesAPI } from '../../../services/movies';
import '/node_modules/swiper/swiper-bundle.min.css';
import '/node_modules/swiper/swiper.min.css';

const RecommendationMovies = (props) => {
  const { id } = props;
  const width = useWindowSize();

  const [recommendation, setRecommendation] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getRecommendationMovies = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getRecommendationMoviesAPI(id);
      setRecommendation(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRecommendationMovies(id);
  }, [id, getRecommendationMovies]);

  return (
    <section className="w-full h-fit">
      <h5 className="font-semibold text-lg mb-2">Recommendation movies</h5>
      <Swiper
        modules={[Navigation]}
        slidesPerView={width < 700 ? 2 : 4}
        spaceBetween={width < 500 ? 8 : 16}
        navigation
        className="md:h-72 h-40"
      >
        {recommendation.map((trending) => (
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

export default RecommendationMovies;
