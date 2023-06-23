import { Base_URl } from "../../../app-environment";
import FooterList from "../../Layout/FooterList/FooterList";
import IconButton from "../IconButton/IconButton";
import classes from "./FooterBar.module.css";

const FooterBar = (props) => {
  return (
    <>
      <div className={classes.container}>
        {props.lists.map((list, index) => (
          <div className={classes.lists} key={list.title + index}>
            <FooterList list={list} />
          </div>
        ))}
        <div className={classes.buttons}>
          <div className="d-flex ">
            {props.social.map((sm, index) => (
              <div key={index} className={classes.icon}>
                <img src={sm} width="30px" height="30px" />
              </div>
            ))}
          </div>
          {/* <select defaultValue="language">
                              <option value="language">Language</option>
                        </select> */}
        </div>
      </div>
      <div className={classes.footer}>© ABCstock All Right Reserved</div>
    </>
  );
};

export default FooterBar;
