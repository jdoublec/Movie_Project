import Main from '../Main/main';

import useMovies from '../../Hooks/movies';

function AllMovies() {
  const { sortedMovies } = useMovies();

  return (
    <Main movies={sortedMovies} />
  );
}

export default AllMovies;
