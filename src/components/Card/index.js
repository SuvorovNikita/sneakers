import styles from './Card.module.scss';

import React from 'react';
import AppContext from '../../context';

import ContentLoader from 'react-content-loader';

function Card({
  id,
  onFavorite,
  onPlus,
  title,
  imgUrl,
  price,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imgUrl, price });
  };

  const onClickfavorite = () => {
    onFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="99" rx="4" ry="4" width="150" height="15" />
          <rect x="0" y="128" rx="4" ry="4" width="90" height="15" />
          <rect x="0" y="157" rx="4" ry="4" width="80" height="24" />
          <rect x="112" y="150" rx="4" ry="4" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickfavorite}>
            <img src={isFavorite ? '/img/liked.svg' : '/img/heart-unliked.svg'} alt="Like" />
          </div>
          <img width="100%" height={135} src={imgUrl} alt="1" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
