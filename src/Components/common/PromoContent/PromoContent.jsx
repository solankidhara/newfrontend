import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import classes from './PromoContent.module.css';

const PromoContent = (props) => {
      return (
            <Fragment>
                  <span className={props.index ? classes.index : classes.spanText}>{props.text}</span>
                  {props['btn-text'] && (
                        <Button variant="outline-light" className={"ms-3 " + classes.buttonText}>
                              {props['btn-text']}
                        </Button>
                  )}
            </Fragment>
      );
};

export default PromoContent;
