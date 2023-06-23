import { Button } from "primereact/button";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import DiaLogComponent from "../../common/model";
import TagUpdateForm from "../UpdateForm/TagUpdateForm";
import { addTags } from "../../../Redux/Slice/category-slice";
import { useDispatch } from "react-redux";

const schema = Joi.object({
  tagName: Joi.string().optional(),
  });  

const EditTagModel = (rowData) => {
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

    if(data.tagName){
      const res = await axios.patch("/admin/tag", { _id: rowData.value, ...data });
      if (res.status === 200) {
        const tags = await axios.get("/admin/tag")
        dispatch(addTags(tags.data))
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
          <TagUpdateForm rowData={rowData} control={control} />
        </DiaLogComponent>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={modelHandler} />
      </>
    );
}

export default EditTagModel 