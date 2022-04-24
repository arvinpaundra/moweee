import { useCallback, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FallbackImg } from '../../../images';
import { getDetailMovieAPI } from '../../../services/movies';

const URL_POSTER = process.env.REACT_APP_URL_POSTER;

const SidePanelItem = (props) => {
  const { index, title, poster_path, id, vote_average } = props;

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

  const genreMovie = genres.map((genre) => genre.name).join(', ');

  if (index === 1) {
    return (
      <div className="rounded-xl overflow-hidden w-full h-52 bg-zwhite mb-2">
        <Link to={`/movie/${id}`}>
          <img
            src={`${URL_POSTER}/${poster_path}` || FallbackImg}
            alt={title}
            className="w-full h-3/4 object-cover rounded-xl"
          />
          <div className="px-2 py-1.5 h-fit text-zblack text-sm font-medium flex justify-between">
            <p className="w-fit">{index}</p>
            <div className="w-9/12 truncate">
              <h5 title={title}>{title}</h5>
              <p className="font-light text-xs">{genreMovie}</p>
            </div>
            <p className="w-fit flex items-center gap-0.5">
              <FaStar color="#FFC100" size={12} /> {vote_average.toFixed(1)}
            </p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <Link
        to={`/movie/${id}`}
        className="flex gap-2 px-2 text-sm font-medium text-zwhite h-[60px] truncate"
      >
        <p className="flex-none">{index}</p>
        <img
          src={`${URL_POSTER}/${poster_path}` || FallbackImg}
          alt={title}
          className="flex-none h-[60px] w-[60px] object-cover rounded-lg"
        />
        <div className="flex-none text-sm">
          <p title={title}>{title}</p>
          <p className="text-xs font-light">{genreMovie}</p>
          <p className="text-xs font-light flex gap-1">
            <FaStar color="#FFC100" size={12} /> {vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SidePanelItem;
