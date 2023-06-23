import { useState } from "react";
import { Link } from "react-router-dom";
import DiaLogComponent from "../../../Admin/common/model";
import classes from "./FooterList.module.css";

const FooterList = (props) => {
  const [visible, setIsVisible] = useState(false);

  const modelHandler = () => {
    setIsVisible(!visible);
  };

  const onHide = () => {
      setIsVisible(false);
    };

  return (
    <div className="d-flex flex-column justify-content-left">
      <span className={"mb-4 fw-bold text-light " + classes.title}>{props.list.title}</span>
      {props.list.links.map((link, ind) => (
        <Link to={link.redirect} onClick={link.redirect ==="#" &&modelHandler} key={link + ind} className={"text-light mb-2 " + classes.links}>
          {link.name}
        </Link>
      ))}
      <DiaLogComponent
        isVisible={visible}
        header="Warning"
        onHide={onHide}
        style={{ height: "100%" }}
      >
        <p>You are currently in protected mode please contact administrator</p>
      </DiaLogComponent>
    </div>
  );
};

export default FooterList;
