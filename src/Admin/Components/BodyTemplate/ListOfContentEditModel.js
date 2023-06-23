import { Button } from "primereact/button";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import DiaLogComponent from "../../common/model";
import ContentFormUpdate from "../UpdateForm/ContentUpdateForm";
import { addCategories, addContent, addContentType, addTags } from "../../../Redux/Slice/category-slice";
import { useDispatch } from "react-redux";

const schema = Joi.object({
    name: Joi.string().optional(),
    category: Joi.optional(),
    contentType: Joi.optional(),
    tagOne: Joi.optional(),
    tagTwo: Joi.optional(),
    fileType: Joi.optional(),
    licenseType: Joi.optional(),
    size: Joi.optional(),
    description: Joi.string().optional(),
    mainFile: Joi.optional(),
    thumbFile: Joi.optional(),
    waterMarkFile: Joi.optional(),  
  });  

const ListOfContentEditModel = (rowData) => {
    const [visible, setIsVisible] = useState(false);

    const dispatch = useDispatch()

    const modelHanndler = () => {
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
  
    const onSubmit = async (content) => {
      
      const res = await axios.patch("/admin/content", { _id: rowData._id, ...content });
      if (res.status === 200) {
        const { data } = await axios.get("/admin/category");
        const response = await axios.get("/admin/content-type")
        const res = await axios.get("/admin/content-list")
        const tags = await axios.get("/admin/tag")
        dispatch(addContentType(response.data))
        dispatch(addCategories(data))
        dispatch(addTags(tags.data))
        dispatch(addContent(res.data))
        onHide();
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
          setIsVisible={modelHanndler}
          header="Update Content"
          renderFooter={renderFooter}
          onHide={onHide}
          style={{ height: "100%" }}
        >
          <ContentFormUpdate rowData={rowData} control={control} />
        </DiaLogComponent>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={modelHanndler} />
      </>
    );
}

export default ListOfContentEditModel