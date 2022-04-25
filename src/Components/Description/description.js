import { MdPlayArrow } from 'react-icons/md';

import cssClass from './description.module.css';

import Card from '../Card/card';

import logo from '../../logo.svg';

function Description(props) {
  const { desc, year } = props;
  const { videoDescription } = desc;

  const getVideoDescription = () => {
    if (videoDescription || videoDescription === '') {
      return <span className={cssClass.description}>{videoDescription}</span>;
    } else {
      return <img src={logo} className={cssClass.logo} alt="logo" />;
    }
  };

  return (
    <Card style={{zIndex: 9, width: "500px"}}>
      <div className={cssClass.descriptionHeader}>
        <span className={cssClass.title}>{year}:</span>
        <div className={cssClass.endIcons}>
          <MdPlayArrow size="20px" />
        </div>
      </div>
      {getVideoDescription()}
    </Card>
  );
}

export default Description;
