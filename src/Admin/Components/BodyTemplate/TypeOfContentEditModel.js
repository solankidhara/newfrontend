import { Button } from "primereact/button";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import DiaLogComponent from "../../common/model";
import ContentTypeUpdateForm from "../UpdateForm/ContentTypeUpdateForm";
import { useDispatch } from "react-redux";
import { addContentType } from "../../../Redux/Slice/category-slice";

const schema = Joi.object({
    type: Joi.string().optional(),
  });  

const TypeOfContentModel = (rowData) => {
  const [visible, setIsVisible] = useState(false);
  
  const dispatch = useDispatch()

  const modelHandler = () => {
    setIsVisible(!visible);
  };
  
  const onHide = () => {
    setIsVisible(false);
  };
  
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });
  
  
  const onSubmit = async (data) => {
    if(data.type){
      const res = await axios.patch("/admin/content-type", { _id: rowData.value, ...data });
      if (res.status === 200) {
        const response = await axios.get("/admin/content-type")
        dispatch(addContentType(response.data))
        onHide();
      }
    }
    };
 
    const renderFooter = () => {
      return (
        <div>
          <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
          <Button label="Yes" icon="pi pi-check" onClick={handleSubmit(onSubmit)} autoFocus />
        </div>
      );
    };
  
    return (
      <>
        <DiaLogComponent
          isVisible={visible}
          setIsVisible={modelHandler}
          header="Update Content"
          renderFooter={renderFooter}
          onHide={onHide}
          style={{ height: "100%" }}
        >
          <ContentTypeUpdateForm rowData={rowData} control={control} />
        </DiaLogComponent>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={modelHandler} />
      </>
    );
}

export default TypeOfContentModel 