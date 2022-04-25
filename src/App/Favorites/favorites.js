import Main from '../Main/main';

import useMovies from '../../Hooks/movies';

function Favorites() {
  const { favorites } = useMovies();

  return <Main movies={favorites} />;
}

export default Favorites;
