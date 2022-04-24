import SidePanelItem from '../../molecules/SidePanelItem/index';
import { useCallback, useEffect, useState } from 'react';
import { getTopRatedMoviesAPI } from '../../../services/movies';

const SidePanel = () => {
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState();

  const getTopRatedMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getTopRatedMoviesAPI();
      setTopRated(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);

  return (
    <aside className="lg:w-3/12 lg:block hidden pt-4">
      <div className="sticky top-[72px] p-4 rounded-2xl bg-zdarkblue">
        {/* Top first */}
        {topRated
          .map((item, index) => (
            <SidePanelItem
              key={item.id}
              poster_path={item.poster_path}
              id={item.id}
              index={index + 1}
              title={item.title}
              vote_average={item.vote_average}
            />
          ))
          .splice(0, 5)}
      </div>
    </aside>
  );
};

export default SidePanel;
