import classes from './dashboardheader.module.css'
import {SlBell} from "react-icons/sl"
import { Image } from 'react-bootstrap';
import DiaLogComponent from '../../common/model';
import { useState } from 'react';

const DashboardHeader = (props) => {
      const [visible, setIsVisible] = useState(false);
  
      const modelHandler = () => {
        setIsVisible(!visible);
      };
      
      const onHide = () => {
        setIsVisible(false);
      };
      return(
            <div className={"d-flex justify-content-between align-items-center " + classes.dashboardheader}>
            <div>
                  <h1><span>{props.greet} ,</span>  {props.uname}</h1>
            </div>
            <div className="d-flex align-items-center" onClick={modelHandler}>
                  <div className={classes.notification_icon}><SlBell /> </div>
                  <div>
                        <Image src={props.userDp} roundedCircle />
                  </div>
            </div>
            <DiaLogComponent isVisible={visible} header="Warning" onHide={onHide} style={{ height: "100%" }}>
                  <p>You are currently in protected mode please contact administrator</p>
            </DiaLogComponent>
      </div>
      )
}

export default DashboardHeader;