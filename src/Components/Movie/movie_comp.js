import { useState } from 'react';
import {
  MdAddCircle,
  MdKeyboardArrowDown,
  MdRemoveCircle,
} from 'react-icons/md';

import cssClass from './movie_comp.module.css';

import Card from '../Card/card';
import Description from '../Description/description';

import useMovies from '../../Hooks/movies';

function MovieComp(props) {
  const { movie } = props;
  const { desc = {}, id, image, rank, title, year } = movie;

  const [showSummary, setShowSummary] = useState(false);

  const { addFavorite, delFavorite, favorites, getMovieById } = useMovies();

  const alreadyFavorite = () => {
    return favorites?.some((f) => f.id === id);
  };

  const toggleShowSummary = async () => {
    if (!showSummary) {
      if (!movie.desc) {
        await getMovieById(id);
      }
    }
    setShowSummary((prev) => !prev);
  };

  const toggleOffShowSummary = () => {
    if (showSummary) {
      setShowSummary(false);
    }
  };

  return (
    <Card onClick={toggleOffShowSummary}>
      <img src={image} alt={title} />
      <div className={cssClass.footer}>
        <span className={cssClass.title}>{title}</span>
        <div className={cssClass.endIcons}>
          {!alreadyFavorite() && (
            <MdAddCircle size="20px" onClick={() => addFavorite(id)} />
          )}
          {alreadyFavorite() && (
            <MdRemoveCircle size="20px" onClick={() => delFavorite(id)} />
          )}
          <MdKeyboardArrowDown size="20px" onClick={toggleShowSummary} />
        </div>
      </div>
      <div className={cssClass.footer}>
        <span className={cssClass.title}>Rank:</span>
        <span>{rank}</span>
      </div>
      {showSummary && <Description desc={desc} year={year} />}
    </Card>
  );
}

export default MovieComp;
