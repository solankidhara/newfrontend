import { Button } from 'react-bootstrap';
import PlanTemplate from '../../Cards/PlanTemplate';
import classes from './PlanPrompt.module.css';

const PlanPrompt = (props) => {
      return (
            <PlanTemplate>
                  <h2 className={classes.text}>{props.text}</h2>
                  <Button className={classes.btn}>{props.btnLabel}</Button>
            </PlanTemplate>
      );
};

export default PlanPrompt;
