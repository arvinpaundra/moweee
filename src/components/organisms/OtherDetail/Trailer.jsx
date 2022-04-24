import { useCallback, useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { getTrailerMovieAPI } from '../../../services/movies';
import Modal from '../../atoms/Modal';

const MovieTrailer = (props) => {
  const { movie_id } = props;

  const [trailers, setTrailers] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const getTrailerMovie = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getTrailerMovieAPI(id);
      setTrailers(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrailerMovie(movie_id);
  }, [getTrailerMovie, movie_id]);

  const filteredTrailers = trailers?.filter(
    (trailer) => trailer.site === 'YouTube' && trailer.official === true,
  )[0];

  const onShowTrailer = () => {
    setShowTrailer((prevState) => !prevState);
  };

  return (
    <>
      <h5 className="my-2">Movie trailer</h5>
      <button
        className="flex gap-1 items-center px-2 bg-zsmoke/30 text-zpurple h-fit w-fit rounded-full mb-4"
        onClick={onShowTrailer}
      >
        <FaPlay size={14} color="#5666FF" /> Trailer
      </button>
      <hr />

      {/* Movie Trailer */}
      {showTrailer && (
        <Modal
          onClose={onShowTrailer}
          className="fixed top-20 md:w-4/5 w-[90%] md:h-[80%] h-1/2 md:right-[10%] right-[5%] z-40"
        >
          <iframe
            title={filteredTrailers?.name}
            src={`https://www.youtube.com/embed/${filteredTrailers?.key}`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            className="w-full h-full"
          ></iframe>
        </Modal>
      )}
    </>
  );
};

export default MovieTrailer;
