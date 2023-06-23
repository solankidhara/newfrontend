import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

const Dropdown = ({ name, control, options, defaultValue, defaultIndex,...props }) => {
  
    return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={ defaultValue &&options[defaultIndex?defaultIndex: 0]}
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            options={options}
            {...props}
          />
        )}
      />
    </>
  );
};

export default Dropdown;
