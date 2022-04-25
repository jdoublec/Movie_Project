import cssClass from './card.module.css';

function Card(props) {
  const {children, onClick} = props;

  return (
    <div className={cssClass.container} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
