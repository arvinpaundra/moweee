import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from '../../../hooks/useWindowSize';
import { Navigation } from 'swiper';
import { useCallback, useEffect, useState } from 'react';
import { getCastsMovieAPI } from '../../../services/movies';
import { FallbackImg } from '../../../images';

const URL_PROFILE = process.env.REACT_APP_URL_PROFILE;

const Casts = (props) => {
  const { movie_id } = props;

  const width = useWindowSize();

  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState();

  const getCastsMovie = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getCastsMovieAPI(id);
      setCasts(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCastsMovie(movie_id);
  }, [getCastsMovie, movie_id]);

  return (
    <section className="h-fit md:mb-6 mb-4">
      <h5 className="font-semibold text-lg mb-2">Casts</h5>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={width < 600 ? 8 : 16}
        navigation
      >
        {casts.map((cast) => (
          <SwiperSlide
            key={cast.id}
            title={`${cast.name} as ${cast.character}`}
            className="md:w-32 w-20 bg-white rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={`${cast.profile_path ? `${URL_PROFILE}/${cast.profile_path}` : FallbackImg}`}
              alt={cast.name}
              className="w-full md:h-48 rounded-t-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Casts;
