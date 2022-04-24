import Card from '../../Components/Card/card';
import cssClass from "./main.module.css";
import useMovie from '../../Hooks/movie';

function Main() {

  const {movies} = useMovie();

  return (
    <div className={cssClass.body}>
      {movies && movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </div>
  );
}

export default Main;
