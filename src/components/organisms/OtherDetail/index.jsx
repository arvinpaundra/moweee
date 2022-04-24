import MovieKeywords from './Keywords';
import MoreDetail from './MoreDetail';
import Trailer from './Trailer';
import WatchProviders from './WatchProviders';

const OtherDetail = (props) => {
  const { budget, original_language, release_date, revenue, status, movie_id } = props;

  return (
    <section className="md:mb-6 mb-4 w-full">
      <MoreDetail
        budget={budget}
        original_language={original_language}
        release_date={release_date}
        revenue={revenue}
        status={status}
      />

      <Trailer movie_id={movie_id} />

      <WatchProviders movie_id={movie_id} />

      <MovieKeywords movie_id={movie_id} />
    </section>
  );
};

export default OtherDetail;
