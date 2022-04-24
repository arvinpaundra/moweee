import { useContext } from 'react';
import { BsGearFill } from 'react-icons/bs';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';
import ExpandNavbar from '../components/organisms/Navbar/ExpandNavbar';
import GeneralContext from '../global/general-context';
import { UnderConstruction } from '../images';

const AnimePage = () => {
  const ctx = useContext(GeneralContext);

  return (
    <>
      <Navbar />
      {ctx.isExpand && <ExpandNavbar />}
      <section className="w-full md:h-[80vh] h-[100vh] md:mb-6 flex flex-col justify-center items-center gap-4">
        <img src={UnderConstruction} alt="Feature is Under Construction" className="w-96" />
        <p className="inline-flex items-center gap-2 md:text-xl text-lg font-normal">
          <BsGearFill /> Feature is under construction . . .
        </p>
      </section>
      <Footer />
    </>
  );
};

export default AnimePage;
