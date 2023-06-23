import { Fragment } from 'react';
import { Button, Row } from 'react-bootstrap';
import classes from './Paging.module.css';

const Paging = (props) => {
      return (
            <Fragment>
                  <Row className="gx-0 py-2">
                        <Button className={classes.nextBtn}>Next Page</Button>
                  </Row>
                  <Row className="g-0 py-3">
                        <div
                              className={
                                    'd-flex align-items-center justify-content-center ' +
                                    classes.page
                              }
                        >
                              <span>Page</span>
                              <input type="number" name="pageNumber" min={1} max={props.total} />
                              <span> of {props.total} </span>
                              <Button className={classes.prev}>
                                    <img src="./images/Prev.png" alt="" />
                              </Button>
                              <Button className={classes.next}>
                                    <img src="./images/Next.png" alt="" />
                              </Button>
                        </div>
                  </Row>
            </Fragment>
      );
};

export default Paging;
