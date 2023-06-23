import { Button } from 'react-bootstrap';
import classes from './PeriodButton.module.css';

const PeriodButton = (props) => {
      return (
            <div className={classes.my}>
                  <Button
                        className={props.active ? classes.active : classes.passive}
                        onClick={() => {
                              props.onClick('Monthly');
                        }}
                  >
                        Monthly
                  </Button>
                  <Button
                        className={!props.active ? classes.active : classes.passive}
                        onClick={() => {
                              props.onClick('Yearly');
                        }}
                  >
                        Yearly
                  </Button>
            </div>
      );
};

export default PeriodButton;
