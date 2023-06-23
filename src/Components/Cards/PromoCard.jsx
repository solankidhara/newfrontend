import classes from './PromoCard.module.css';

const PromoCard = (props) => {
      return (
            <div className={props.index ? classes['promo-card-index'] : classes['promo-card']}>
                  {props.children}
            </div>
      );
};

export default PromoCard;
