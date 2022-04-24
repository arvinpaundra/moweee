import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SiteMap from '../../molecules/FooterSiteMap';

const Footer = () => {
  return (
    <footer className="w-full h-fit flex md:flex-row flex-col md:py-16 md:justify-center md:gap-16 gap-4 p-4 bg-zfooterdarkblue text-zwhite">
      <Link to="/" className="font-bold font-logo text-xl">
        MOWEEE
      </Link>
      <div className="flex flex-col">
        <h5 className="font-semibold text-lg">Credits</h5>
        <SiteMap href="https://dribbble.com/shots/17748330-Movie-App" label="Vako Pirtskhalava" />
        <SiteMap href="https://dribbble.com/shots/15473863-Movie-Streaming-App" label="Nicklefox" />
        <SiteMap
          href="https://dribbble.com/shots/11962275-Serial-killer-web-service-Tv-Show-and-series-rating"
          label="Alex Bazhenov"
        />
        <SiteMap href="https://www.themoviedb.org/" label="The Movie DB" />
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold text-lg">Links</h5>
        <SiteMap
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/arvin-paundra-ardana-8b41a4232/"
          label="Arvin Paundra Ardana"
        />
        <SiteMap icon={<FaGithub />} href="https://github.com/arvinpaundra" label="arvinpaundra" />
        <SiteMap
          icon={<RiInstagramFill />}
          href="https://instagram.com/arvinpaundra_"
          label="arvinpaundra_"
        />
      </div>
      <div className="flex flex-col">
        <h5 className="font-semibold text-lg">Tools</h5>
        <SiteMap href="https://figma.com" label="Figma" />
        <SiteMap href="https://create-react-app.dev" label="Create React App" />
        {/* <SiteMap href="https://firebase.google.com" label="Firebase" /> */}
        <SiteMap
          href="https://developers.themoviedb.org/3/getting-started/introduction"
          label="TMDB API"
        />
      </div>
    </footer>
  );
};

export default Footer;
