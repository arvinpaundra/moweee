import { Routes, Route } from 'react-router-dom';
import GeneralContextProvider from './global/GeneralContextProvider';
import { MoviesPage, DetailPage, NotFound, SearchPage, TVPage, AnimePage } from './pages';

function App() {
  return (
    <GeneralContextProvider>
      <Routes>
        {/* Error not found */}
        <Route path="*" element={<NotFound />} />

        {/* Home */}
        <Route path="/" element={<MoviesPage />} />

        {/* Detail page */}
        <Route path="/movie/:movie_id" element={<DetailPage />} />

        {/* Search page */}
        <Route path="/search" element={<SearchPage />} />

        {/* TV page */}
        <Route path="/tv" element={<TVPage />} />

        {/* Anime page */}
        <Route path="/anime" element={<AnimePage />} />
      </Routes>
    </GeneralContextProvider>
  );
}

export default App;
