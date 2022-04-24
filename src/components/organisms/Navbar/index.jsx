import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSearch } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import GeneralContext from '../../../global/general-context';

const Navbar = () => {
  const ctx = useContext(GeneralContext);

  return (
    <header className="fixed top-0 right-0 w-full z-50 md:px-10 px-4 backdrop-blur-md bg-white/30 text-zblack">
      <nav className="flex justify-between items-center w-full md:h-16 h-fit py-4">
        <Link to="/" className="md:text-lg text-base font-bold font-logo">
          MOWEEE
        </Link>
        <div className="md:flex hidden justify-end items-center gap-4 font-semibold text-sm">
          <Link to="/">Movies</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/anime">Animes</Link>
          <p className="font-light text-xl">|</p>
          <Link to="/search">
            <ImSearch size={18} />
          </Link>
        </div>
        <div className="md:hidden" onClick={ctx.isExpandHandler}>
          {ctx.isExpand ? (
            <FaTimes size={20} color="#0A090B" />
          ) : (
            <GiHamburgerMenu size={20} color="#0A090B" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
