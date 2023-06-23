import React, { useState } from "react";
import DiaLogComponent from "../../common/model";

const ProtectedModel = () => {
  const [visible, setIsVisible] = useState(true);
  const onHide = () => {
    setIsVisible(false);
  };
  return (
    <DiaLogComponent
      isVisible={visible}
      header="Warning"
      onHide={onHide}
      style={{ height: "100%" }}
    >
      <p>You are currently in protected mode please contact administrator</p>
    </DiaLogComponent>
  );
};

export default ProtectedModel;
