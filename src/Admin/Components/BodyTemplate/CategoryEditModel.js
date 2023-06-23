import { Button } from "primereact/button";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import DiaLogComponent from "../../common/model";
import CategoryFormUpdate from "../UpdateForm/CategoryUpdateForm";
import { useDispatch } from "react-redux";
import { addCategories } from "../../../Redux/Slice/category-slice";

const schema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
  });  

const CategoryEditModel = (rowData) => {
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
    if(data.name || data.description){
      const res = await axios.patch("/admin/category", { _id: rowData._id, ...data });
      if (res.status === 200) {
        const { data } = await axios.get("/users/category");
        dispatch(addCategories(data));
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
          <CategoryFormUpdate rowData={rowData} control={control} />
        </DiaLogComponent>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={modelHandler} />
      </>
    );
}

export default CategoryEditModel