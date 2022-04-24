import { useCallback, useEffect, useState } from 'react';
import { getKeywordsAPI } from '../../../services/movies';

const MovieKeywords = (props) => {
  const { movie_id } = props;

  const [keywords, setKeywords] = useState([]);
  const [error, setError] = useState(null);

  const getKeywords = useCallback(async (id) => {
    try {
      const data = await getKeywordsAPI(id);
      setKeywords(data);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    getKeywords(movie_id);
  }, [getKeywords, movie_id]);

  return (
    <>
      <h5 className="my-2">Keywords :</h5>
      <div className="flex gap-2 flex-wrap mb-4">
        {keywords
          ?.map((keyword) => (
            <div
              key={keyword.id}
              className="bg-zsmoke/20 text-sm text-zblack px-2 border rounded-full cursor-pointer"
            >
              <p>{keyword.name}</p>
            </div>
          ))
          .splice(0, 6)}
      </div>
      <hr />
    </>
  );
};

export default MovieKeywords;
