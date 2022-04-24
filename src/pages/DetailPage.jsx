import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import HeroDetailPage from '../components/organisms/HeroDetailPage';
import OtherDetail from '../components/organisms/OtherDetail';
import Casts from '../components/organisms/Casts';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovieAPI } from '../services/movies';
import GeneralContext from '../global/general-context';
import ExpandNavbar from '../components/organisms/Navbar/ExpandNavbar';
import RecommendationMovies from '../components/organisms/SimilarMovies';

const DetailPage = () => {
  const { movie_id } = useParams();

  const ctx = useContext(GeneralContext);

  const [movie, setMovie] = useState({
    backdrop_path: '',
    poster_path: '',
    title: '',
    tagline: '',
    vote_average: null,
    runtime: null,
    overview: '',
    genres: [{ name: '' }],
    release_date: '',
    budget: null,
    revenue: null,
    status: '',
    original_language: '',
  });
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState();

  const getDetailMovie = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const data = await getDetailMovieAPI(id);
      setMovie(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getDetailMovie(movie_id);
  }, [getDetailMovie, movie_id]);

  return (
    <>
      <Navbar />
      {ctx.isExpand && <ExpandNavbar />}
      <main>
        {/* Hero section */}
        <HeroDetailPage
          backdrop_path={movie.backdrop_path}
          overview={movie.overview}
          poster_path={movie.poster_path}
          runtime={movie.runtime}
          tagline={movie.tagline}
          title={movie.title}
          vote_average={movie.vote_average}
          genres={movie.genres}
        />

        {/* <iframe title='d' src='' /> */}

        <div className="md:pl-10 px-4 my-6 md:flex block">
          <div className="md:w-9/12 w-full md:mr-5 md:mb-0 mb-4">
            {/* Cast */}
            <Casts movie_id={movie_id} />

            {/* Similar movies */}
            <RecommendationMovies id={movie_id} />
          </div>

          {/* Side panel */}
          <div className="md:w-3/12">
            {/* Other detail */}
            <OtherDetail
              budget={movie.budget}
              original_language={movie.original_language}
              release_date={movie.release_date}
              revenue={movie.revenue}
              status={movie.status}
              movie_id={movie_id}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailPage;
