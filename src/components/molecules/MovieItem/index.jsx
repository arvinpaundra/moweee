import { useCallback, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FallbackImg } from '../../../images';
import { getDetailMovieAPI } from '../../../services/movies';

const URL_POSTER = process.env.REACT_APP_URL_POSTER;

const MovieItem = (props) => {
  const { id, poster_path, title, vote_average } = props;

  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  const getGenres = useCallback(async (id) => {
    try {
      const data = await getDetailMovieAPI(id);
      setGenres(data.genres);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    getGenres(id);
  }, [getGenres, id]);

  const ratings = vote_average !== 0 ? vote_average.toFixed(1) : 'N/A';
  const genreMovie = genres.map((genre) => genre.name).join(', ');
  const poster = poster_path ? `${URL_POSTER}/${poster_path}` : FallbackImg;

  return (
    <Link to={`/movie/${id}`} className="rounded-xl">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-zblack" />
      <div className="absolute bottom-3 right-0 w-full px-2 text-zwhite z-10">
        <h3 className="md:text-base text-sm font-medium tracking-wider">{title}</h3>
        <p className="md:text-xs text-xxs font-light">{genreMovie}</p>
        <p className="md:text-sm text-xxs font-medium flex gap-0.5">
          <FaStar color="#FFC100" /> {ratings}
        </p>
      </div>
      <img src={poster} alt={title} className="w-full h-full object-cover" />
    </Link>
  );
};

export default MovieItem;
