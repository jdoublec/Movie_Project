import useMovie from '../../Hooks/movie';
import cssClass from './header.module.css';

function Header() {

  const {getMovies, orderMoviesBy, favorites} = useMovie();

  const getFavorites = () => {
    console.log(favorites);
  }
  
  return (
    <header className={cssClass.header}>
      <button onClick={getMovies}>Get Movies</button>
      <button onClick={getFavorites}>Get Favorites</button>
      <button onClick={orderMoviesBy}>Order Movies</button>
    </header>
  );
}

export default Header;
