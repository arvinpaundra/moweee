import { useContext } from 'react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import ExpandNavbar from '../components/organisms/Navbar/ExpandNavbar';
import GeneralContext from '../global/general-context';
import { Error404 } from '../images';

const NotFound = () => {
  const ctx = useContext(GeneralContext);

  return (
    <>
      <Navbar />
      {ctx.isExpand && <ExpandNavbar />}
      <section className="w-full md:h-[80vh] h-[100vh] flex flex-col justify-center items-center md:gap-6 gap-4 pt-16 md:mb-6 mb-4">
        <img src={Error404} alt="Page Not Found" className="w-96" />
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
