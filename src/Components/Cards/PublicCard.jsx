import classes from './PublicCard.module.css';

const PublicCard = (props) => {
      return (
            <div className={classes.card}>
                  {props.children}
            </div>
      );
};

export default PublicCard;
