import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./DialogDemo.css";

const DiaLogComponent = ({ isVisible, setIsVisible , header, renderFooter, onHide,...props}) => {

  return (
    <>
      <Dialog header={header} visible={isVisible} style={{ width: "50vw" }} footer={renderFooter} onHide={() => onHide()}>
        {props.children}
      </Dialog>
    </>
  );
};

export default DiaLogComponent;
