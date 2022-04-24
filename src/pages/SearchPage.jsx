import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import MovieItem from '../components/molecules/MovieItem';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import ExpandNavbar from '../components/organisms/Navbar/ExpandNavbar';
import GeneralContext from '../global/general-context';
import { getSearchMoviesAPI } from '../services/movies';

const SearchPage = () => {
  const ctx = useContext(GeneralContext);

  let { search, searchSubmitHandler } = ctx;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getSearchMovies = useCallback(async (query) => {
    try {
      setIsLoading(true);
      const data = await getSearchMoviesAPI(query);
      setMovies(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getSearchMovies(search);
  }, [getSearchMovies, search]);

  return (
    <>
      <Navbar />
      {ctx.isExpand && <ExpandNavbar />}
      <main className="md:px-10 px-4 pt-16 min-h-[80vh]">
        {/* Search bar section */}
        <section>
          <h2 className="text-center md:text-2xl text-xl font-semibold md:mb-6 mb-4">
            Search: <span className="text-zpurple">"{search}"</span>
          </h2>
          <form className="w-full h-fit flex justify-center items-center md:mb-6 mb-4">
            <input
              onChange={searchSubmitHandler}
              type="text"
              placeholder="Search for movies, tv shows, or animes . . ."
              className="md:w-3/4 w-full h-11 rounded-lg px-5 py-2 bg-zsmoke/20 focus:outline-none placeholder:text-sm"
            />
          </form>
        </section>
        <hr />

        <p className="text-base font-semibold md:my-4 my-2">
          Result for <span className="text-zpurple">"{search}"</span>
        </p>

        {/* Movie result list */}
        {movies?.length < 1 && <p className="text-center">Result for {`${search}`} not found.</p>}
        <div className="w-full flex md:gap-4 gap-2 md:justify-start justify-evenly flex-wrap md:px-20 md:mb-6 mb-4">
          {movies?.map((movie) => (
            <div key={movie.id} className="relative overflow-hidden rounded-xl">
              <div className="md:w-48 w-40 md:h-72 h-40 overflow-hidden rounded-xl">
                <MovieItem
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  vote_average={movie.vote_average}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
