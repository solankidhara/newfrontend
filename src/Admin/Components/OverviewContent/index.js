import { Col, Row } from 'react-bootstrap';

import classes from './overviewcontent.module.css';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

const OverviewContent = (props) => {
      return (
            <>
                  <Row>
                        {props.data.map((i) => (
                              <Col md={2}>
                                    <div className={classes.title}>{i.title}</div>
                                    <h1 className={classes.counter}>{i.counter}</h1>
                                    <div
                                          className={
                                                i.result > 0
                                                      ? classes.result + ' ' + classes.green
                                                      : classes.result + ' ' + classes.red
                                          }
                                    >
                                          {i.result > 0 ? <BiCaretUp /> : <BiCaretDown />}{' '}
                                          {i.result}%
                                    </div>
                              </Col>
                        ))}
                  </Row>
            </>
      );
};

export default OverviewContent;
