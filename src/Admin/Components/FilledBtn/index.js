import { Button } from "react-bootstrap";
import classes from './FilledBtn.module.css';

const FilledBtn = (props) => {
      return (
            <Button className={classes.filledBtn + " " + props.className}  onClick={props.onClick} > {props.icon} {props.text}</Button>
      )
}

export default FilledBtn;