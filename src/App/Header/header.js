import { useNavigate } from 'react-router-dom';

import cssClass from './header.module.css';

import useMovies from '../../Hooks/movies';

function Header() {
  const { getMovies } = useMovies();
  const navigate = useNavigate();

  const fetchMovies = () => {
    getMovies();
  }

  const viewMovies = () => {
    navigate('/');
  }

  const viewFavorites = () => {
    navigate('/favs');
  };

  return (
    <header className={cssClass.header}>
      <button onClick={fetchMovies}>Fetch Movies</button>
      <button onClick={viewMovies}>View All Movies</button>
      <button onClick={viewFavorites}>View Favorites</button>
    </header>
  );
}

export default Header;
