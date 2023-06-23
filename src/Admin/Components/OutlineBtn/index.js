import { Button } from "react-bootstrap";
import classes from './OultlineBtn.module.css';

const OutlineBtn = (props) => {
      return (
            <Button className={classes.outlineBtn + " " + props.className} onClick={props.onClick}> {props.icon} {props.text}</Button>
      )
}

export default OutlineBtn;