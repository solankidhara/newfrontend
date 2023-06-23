import { Button } from 'react-bootstrap';
import classes from './IconButton.module.css';

const IconButton = (props) => {
      return (
            <Button className={props['bs-class'] + ' ' + classes.btn} type={props.type}>
                  {props.children}
            </Button>
      );
};

export default IconButton;
