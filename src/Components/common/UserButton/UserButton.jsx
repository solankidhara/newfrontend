import { Button } from 'react-bootstrap';
import classes from './UserButton.module.css';

const UserButton = (props) => {
      return (
            <Button type={props.type} className={props['bs-class'] + " rounded-pill " + classes.btn}>
                  {props.children}
            </Button>
      );
};

export default UserButton;
