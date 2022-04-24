import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralContext from '../../../global/general-context';

const SearchSection = () => {
  const ctx = useContext(GeneralContext);

  let navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    navigate('/search');
  };

  return (
    <section className="md:mt-6 my-4">
      <h2 className="md:block hidden mb-4 text-2xl font-semibold">
        Find Movies, TV Shows, or Animes
      </h2>
      <form className="flex items-center" onSubmit={onSubmitHandler}>
        <input
          onChange={ctx.searchSubmitHandler}
          type="text"
          placeholder="Search for movies, tv shows, or animes . . ."
          className="md:w-3/4 w-full h-11 rounded-l-lg md:rounded-r-none rounded-r-lg px-5 py-2 bg-zsmoke/20 focus:outline-none placeholder:text-sm"
        />
        <button className="md:block hidden px-3 py-[0.625rem] bg-zpurple text-zwhite rounded-r-lg w-fit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchSection;
