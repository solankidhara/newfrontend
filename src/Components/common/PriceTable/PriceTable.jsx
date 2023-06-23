import { useState } from 'react';
import { Button } from 'react-bootstrap';
import DiaLogComponent from '../../../Admin/common/model';
import classes from './PriceTable.module.css';

const PriceTable = (props) => {
      const [visible, setIsVisible] = useState(false);

      const modelHandler = () => {
        setIsVisible(!visible);
      };
    
      const onHide = () => {
          setIsVisible(false);
        };
      
      return (
            <table className={'table ' + classes.tbl}>
                  <tr>
                        <th className="d-none d-md-block">
                              <div className={'text-center ' + classes.forRow}>
                                    <table className="w-100">
                                          {props.packages
                                                .filter((pack, index) => index !== 0 && pack)
                                                .map((pack) => (
                                                      <tr className={classes.data}>
                                                            <td className="d-none d-md-block">
                                                                  {pack.for}
                                                            </td>
                                                      </tr>
                                                ))}
                                    </table>
                              </div>
                        </th>
                        <th>
                              <div className={'text-center ' + classes.title}>Starter</div>
                              <div className={'text-center ' + classes.price}>
                                    <h4>{props.packages[0].starter}</h4>
                                    <span>user/{props.active ? 'month' : 'year'}</span>
                              </div>
                              <div className="text-center">
                                    <table className="w-100">
                                          {props.packages
                                                .filter((pack, index) => index !== 0 && pack)
                                                .map((pack) => (
                                                      <tr className={classes.data}>
                                                            <td className="text-center">
                                                                  <span className="d-inline-block d-md-none">
                                                                        <b>{pack.for} : </b>
                                                                  </span>
                                                                  {String(pack.starter).padStart(
                                                                        2,
                                                                        '0'
                                                                  ) + ' / daily'}
                                                            </td>
                                                      </tr>
                                                ))}
                                          <tr>
                                                <td className="text-center">
                                                      <Button
                                                            variant="dark"
                                                            className={classes.btn}
                                                            onClick={modelHandler}            
                                                      >
                                                            Start now
                                                      </Button>
                                                </td>
                                          </tr>
                                    </table>
                              </div>
                        </th>
                        <th>
                              <div className={'text-center ' + classes.title}>Premium</div>
                              <div className={'text-center ' + classes.price}>
                                    <h4>{props.packages[0].premium}</h4>
                                    <span>user/{props.active ? 'month' : 'year'}</span>
                              </div>
                              <div className="text-center">
                                    <table className="w-100">
                                          {props.packages
                                                .filter((pack, index) => index !== 0 && pack)
                                                .map((pack) => (
                                                      <tr className={classes.data}>
                                                            <td className="text-center">
                                                                  <span className="d-inline-block d-md-none">
                                                                        <b>{pack.for} : </b>
                                                                  </span>
                                                                  {String(pack.premium).padStart(
                                                                        2,
                                                                        '0'
                                                                  ) + ' / daily'}
                                                            </td>
                                                      </tr>
                                                ))}
                                          <tr>
                                                <td className="text-center">
                                                      <Button
                                                            variant="dark"
                                                            className={classes.btn}
                                                            onClick={modelHandler}            
                                                      >
                                                            Start now
                                                      </Button>
                                                </td>
                                          </tr>
                                    </table>
                              </div>
                        </th>
                        <th>
                              <div className={'text-center ' + classes.title}>Corporate</div>
                              <div className={'text-center ' + classes.price}>
                                    <h4>{props.packages[0].corporate}</h4>
                                    <span>user/{props.active ? 'month' : 'year'}</span>
                              </div>
                              <div className="text-center">
                                    <table className="w-100">
                                          {props.packages
                                                .filter((pack, index) => index !== 0 && pack)
                                                .map((pack) => (
                                                      <tr className={classes.data}>
                                                            <td className="text-center">
                                                                  <span className="d-inline-block d-md-none">
                                                                        <b>{pack.for} : </b>
                                                                  </span>
                                                                  {String(pack.corporate).padStart(
                                                                        2,
                                                                        '0'
                                                                  ) + ' / daily'}
                                                            </td>
                                                      </tr>
                                                ))}
                                          <tr>
                                                <td className="text-center">
                                                      <Button
                                                            variant="dark"
                                                            className={classes.btn}
                                                            onClick={modelHandler}            
                                                      >
                                                            Start now
                                                      </Button>
                                                </td>
                                          </tr>
                                    </table>
                              </div>
                        </th>
                  </tr>
                  <DiaLogComponent
                        isVisible={visible}
                        header="Warning"
                        onHide={onHide}
                        style={{ height: "100%" }}
                  >
                        <p>You are currently in protected mode please contact administrator</p>
                  </DiaLogComponent>
            </table>
      );
};

export default PriceTable;
