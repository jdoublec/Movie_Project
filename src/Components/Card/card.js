import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import useMovie from '../../Hooks/movie';
import cssClass from './card.module.css';

function Card(props) {
  const { movie } = props;
  const { id, image, title } = movie;

  const { addFavorite, delFavorite, favorites } = useMovie();

  const alreadyFavorite = () => {
    return favorites?.some((f) => f.id === id);
  };

  return (
    <div className={cssClass.container}>
      <img src={image} alt={title} />
      <div className={cssClass.footer}>
        <span className={cssClass.title}>{title}</span>
        <div className={cssClass.favorites}>
          {!alreadyFavorite() && (
            <MdAddCircle size="30px" onClick={() => addFavorite(id)} />
          )}
          {alreadyFavorite() && (
            <MdRemoveCircle size="30px" onClick={() => delFavorite(id)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
