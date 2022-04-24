import useWindowSize from '../../../hooks/useWindowSize';
import { FallbackImg } from '../../../images';
import { FaStar } from 'react-icons/fa';

const URL_POSTER = process.env.REACT_APP_URL_POSTER;
const URL_BACKDROP = process.env.REACT_APP_URL_BACKDROP;

const HeroDetailPage = (props) => {
  const { backdrop_path, overview, poster_path, runtime, tagline, title, vote_average, genres } =
    props;

  const width = useWindowSize();

  const getGenres = genres.map((genre) => genre.name).join(', ');

  const ratings = vote_average !== 0 ? vote_average?.toFixed(1) : 'N/A';

  return (
    <>
      <section className="relative w-full md:h-[536px] h-80 bg-zwhite">
        <img
          src={`${URL_BACKDROP}/${backdrop_path}` || FallbackImg}
          alt={title}
          className="absolute w-full md:h-[536px] h-80 object-cover object-top"
        />
        <div className="absolute md:block hidden w-full h-full bg-gradient-to-r from-zblack to-transparent" />
        <div className="absolute md:hidden w-full h-full bg-gradient-to-b from-transparent to-zwhite via-transparent" />
        <div className="absolute top-20 md:flex hidden gap-5 px-10">
          <img
            src={`${URL_POSTER}/${poster_path}` || FallbackImg}
            alt={title}
            className="w-72 md:block hidden object-cover rounded-3xl"
          />
          <div className="text-zwhite md:block hidden">
            <h1 className="font-bold text-4xl mb-4">{title}</h1>
            <p className="text-base font-light font-secondary mb-4">{tagline}</p>
            <table className="text-base mb-4">
              <tbody className="flex flex-col gap-2">
                <tr>
                  <td className="font-light font-secondary w-24">Rating</td>
                  <td className="font-normal">{ratings}</td>
                </tr>
                <tr>
                  <td className="font-light font-secondary w-24">Genres</td>
                  <td className="font-normal">{getGenres}</td>
                </tr>
                <tr>
                  <td className="font-light font-secondary w-24">Duration</td>
                  <td className="font-normal">{runtime}m</td>
                </tr>
              </tbody>
            </table>
            <p className="text-lg font-medium mb-2">Overview</p>
            <p className={`font-light text-sm ${width < 1100 ? 'w-full' : 'w-3/5'} mb-5`}>
              {overview}
            </p>
          </div>
        </div>
      </section>

      {/* On mobile */}
      <div className="px-4 md:hidden">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="font-medium text-lg flex gap-0.5">
            <FaStar color="#FFC100" /> {ratings}
          </p>
        </div>
        <p className="text-sm font-normal font-secondary mb-4">
          {getGenres} | {runtime}m
        </p>
        <p className="text-lg font-semibold">Overview</p>
        <p className="text-xs font-normal">{overview}</p>
      </div>
    </>
  );
};

export default HeroDetailPage;
