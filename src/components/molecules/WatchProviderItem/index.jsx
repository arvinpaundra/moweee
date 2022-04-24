import { FallbackImg } from '../../../images';

const URL_LOGO = process.env.REACT_APP_URL_LOGO;

const WatchProviderItem = (props) => {
  const { provider_name, logo_path } = props;

  return (
    <img
      width={50}
      height={50}
      title={provider_name}
      src={`${logo_path ? `${URL_LOGO}/${logo_path}` : <FallbackImg />}`}
      alt={provider_name}
      className="rounded-lg"
    />
  );
};

export default WatchProviderItem;
