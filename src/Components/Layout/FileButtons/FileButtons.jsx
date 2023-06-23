import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./FileButtons.module.css";
import DiaLogComponent from "../../../Admin/common/model";
import { Base_URl } from "../../../app-environment";

const FileButtons = () => {
  const [visible, setIsVisible] = useState(false);

  const modelHandler = () => {
    setIsVisible(!visible);
  };

  const onHide = () => {
    setIsVisible(false);
  };

  const { id } = useParams();
  const handleDownload = async (e) => {
    try {
      const { data } = await axios.get(`/users/main-file/${id}`);
      saveAs(Base_URl+data?.mainFile);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={"d-flex flex-column " + classes.btns}>
      <Button variant="dark" onClick={modelHandler}>
        <img alt="" src="./images/Share.png" />
        <span className="mx-2">Share</span>
      </Button>
      <Button variant="dark" onClick={modelHandler}>
        <img alt="" src="./images/Like.png" />
        <span className="mx-2">Save</span>
      </Button>
      <Button variant="dark" onClick={handleDownload}>
        Download Now
      </Button>

      <DiaLogComponent isVisible={visible} header="Warning" onHide={onHide} style={{ height: "100%" }}>
        <p>You are currently in protected mode please contact administrator</p>
      </DiaLogComponent>
    </div>
  );
};

export default FileButtons;
