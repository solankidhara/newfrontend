import { Button } from "primereact/button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./SearchControls.module.css";

const SearchControls = (props) => {
  const { dd, tag } = useParams();
  const navigate = useNavigate();

  const [searchField, setSearchField] = useState(tag);
  const [contentType, setContentType] = useState(dd ? dd : props.selected);

  const nameChangeHandler = (e) => {
    if (e.target.value) {
    }
    setSearchField(e.target.value);
  };

  const submitHandler = () => {
    if (searchField) {
      return navigate("/" + contentType + "/search/" + searchField);
    }
    return navigate("/" + contentType + "/search");
  };

  const contentTypeChangeHandler = (e) => {
    setContentType(e.target.value);
  };

  return (
    <div className={classes["browse-controls"]}>
      <select
        className="text-center"
        defaultValue={dd ? dd : props.selected}
        onChange={contentTypeChangeHandler}
      >
        {props.options.map((option, index) => (
          <option
            key={index}
            value={option.name.toLowerCase().replace(/\s/g, "")}
          >
            {option.name}
          </option>
        ))}
      </select>
      <Form.Control
        className={classes.search}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={tag}
        onChange={nameChangeHandler}
      />
      <Button
        type="button"
        className={classes.btn}
        icon="pi pi-search"
        onClick={submitHandler}
      />
    </div>
  );
};

export default SearchControls;
