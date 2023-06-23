import classes from './Pricing.module.css';

const Pricing = (props) => {
      return (
            <div className="g-0 container-fluid d-flex justify-content-center">
                  <div className={classes.card + ' ' + props['bs-class']}>{props.children}</div>
            </div>
      );
};

export default Pricing;
