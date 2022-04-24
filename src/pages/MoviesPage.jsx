import Navbar from '../components/organisms/Navbar';
import SearchSection from '../components/organisms/SearchSection';
import SidePanel from '../components/organisms/SidePanel';
import { MickeyPeek } from '../images';
import Footer from '../components/organisms/Footer';
import MoviesNowPlaying from '../components/organisms/MoviesNowPlaying';
import TrendingMovies from '../components/organisms/TrendingMovies';
import TopRatedMovies from '../components/organisms/TopRatedMovies/TopRatedMovies';
import PopularMovies from '../components/organisms/PopularMovies';
import ExpandNavbar from '../components/organisms/Navbar/ExpandNavbar';
import { useContext } from 'react';
import GeneralContext from '../global/general-context';

const MoviesPage = () => {
  const ctx = useContext(GeneralContext);

  return (
    <>
      <Navbar />
      {ctx.isExpand && <ExpandNavbar />}
      <main className="flex w-full lg:px-10 px-4 gap-5 md:mb-8 mb-4 pt-16">
        {/* Main section */}
        <div className="lg:w-9/12 h-full col-span-12 overflow-hidden">
          {/* Search */}
          <SearchSection />

          {/* Banner */}
          <section className="flex justify-between items-center gap-5 lg:w-3/4 w-full h-fit px-4 lg:pr-0 rounded-lg bg-zpurple overflow-hidden md:mb-6 mb-4">
            <div className="text-zwhite py-2">
              <h5 className="font-semibold md:text-xl text-base md:mb-4 mb-0">
                What movie you want to know ?
              </h5>
              <p className="md:text-base text-sm font-light">
                Find movies or tv shows for your preferences either to watch it or not.
              </p>
            </div>
            <img src={MickeyPeek} alt="Mickey" className="lg:block hidden w-20 h-24" />
          </section>

          {/* Now playing */}
          <MoviesNowPlaying />

          {/* Trending movies */}
          <TrendingMovies />

          {/* Popular movies */}
          <PopularMovies />

          {/* Top rated movies on mobile */}
          <TopRatedMovies />
        </div>

        {/* Side panel */}
        <SidePanel />
      </main>
      <Footer />
    </>
  );
};

export default MoviesPage;
