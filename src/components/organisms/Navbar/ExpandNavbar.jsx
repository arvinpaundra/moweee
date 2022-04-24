import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../../../global/general-context';
import Modal from '../../atoms/Modal';
import { ImSearch } from 'react-icons/im';

const ExpandNavbar = () => {
  const ctx = useContext(GeneralContext);

  return (
    <Modal
      className="fixed top-14 right-0 w-full h-fit backdrop-blur-xl bg-zwhite/30 z-40"
      onClose={ctx.isExpandHandler}
    >
      <div className="flex flex-col gap-4 p-4">
        <Link to="/">Movies</Link>
        <Link to="/tv">TV Shows</Link>
        <Link to="/anime">Animes</Link>
        <Link to="/search" className="flex gap-2 items-center">
          <ImSearch size={18} /> Search
        </Link>
      </div>
    </Modal>
  );
};

export default ExpandNavbar;
