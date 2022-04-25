import cssClass from './main.module.css';

import MovieComp from '../../Components/Movie/movie_comp';
import logo from '../../logo.svg';

function Main(props) {
  const { movies } = props;

  return (
    <div className={cssClass.body}>
      {movies.length > 0 &&
        movies.map((movie) => <MovieComp key={movie.id} movie={movie} />)}
      {movies.length === 0 && (
        <img src={logo} className={cssClass.logo} alt="logo" />
      )}
    </div>
  );
}

export default Main;
