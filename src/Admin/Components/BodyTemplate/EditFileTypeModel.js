import { Button } from "primereact/button";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import DiaLogComponent from "../../common/model";
import { addFileType } from "../../../Redux/Slice/category-slice";
import { useDispatch } from "react-redux";
import SingleFieldUpdateForm from "../UpdateForm/SingleFieldUpadeForm";

const schema = Joi.object({
  name: Joi.string().optional(),
});

const EditFileTypeModel = (rowData) => {
  const [visible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

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
    if (data.name) {
      const res = await axios.patch("/admin/file-type", { _id: rowData.value, ...data });
      if (res.status === 200) {
        const fileTypes = await axios.get("/admin/file-type");
        dispatch(addFileType(fileTypes.data));
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
        header="Update File Type"
        renderFooter={renderFooter}
        onHide={onHide}
        style={{ height: "100%" }}
      >
        <SingleFieldUpdateForm rowData={rowData} control={control} name="name" label="File Name"/>
      </DiaLogComponent>
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={modelHandler} />
    </>
  );
};

export default EditFileTypeModel;
