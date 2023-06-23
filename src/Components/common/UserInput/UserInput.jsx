import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import classes from "./UserInput.module.css";

const UserInput = ({ name, control, type, placeholder, fieldClass , onChange, defaultValue,...props }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Control
            className={`${fieldClass && classes.field} ${props["bs-class"]} ${props.className}`}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            {...field}
          />
        )}
      />
    </>
  );
};

export default UserInput;
