import { useCallback, useEffect, useState } from 'react';
import { getWatchProvidersAPI } from '../../../services/movies';
import WatchProviderItem from '../../molecules/WatchProviderItem';

const WatchProviders = (props) => {
  const { movie_id } = props;

  const [providers, setProviders] = useState([]);
  const [error, setError] = useState(null);

  const getWatchProviders = useCallback(async (id) => {
    try {
      const data = await getWatchProvidersAPI(id);
      setProviders(data);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    getWatchProviders(movie_id);
  }, [getWatchProviders, movie_id]);

  return (
    <>
      <h5 className="my-2">Available in :</h5>
      <div className="flex gap-4 items-center flex-wrap mb-4">
        {!providers && <div>Not available yet.</div>}
        {providers?.flatrate?.map((provider) => (
          <WatchProviderItem
            key={provider.provider_id}
            provider_name={provider.provider_name}
            logo_path={provider.logo_path}
          />
        ))}
        {providers?.rent?.map((provider) => (
          <WatchProviderItem
            key={provider.provider_id}
            provider_name={provider.provider_name}
            logo_path={provider.logo_path}
          />
        ))}
      </div>
      <hr />
    </>
  );
};

export default WatchProviders;
