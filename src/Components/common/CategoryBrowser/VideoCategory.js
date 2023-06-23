import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import CategoryImage from "../Category/CategoryImage";
import CategoryVideo from "../Category/CategoryVideo";
import classes from "./CategoryBrowser.module.css";

const VideoCategory = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/users/category");
      setCategories(data);
    })();
  }, []);

  return (
    <Container className={props["bs-class"]}>
      <span className={"ms-lg-5 " + classes["trending-title"]}>{props.children}</span>
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((cat, index) => (
          <CategoryVideo key={cat._id} title={cat.name} thumbnail={cat.thumbNailImg} />
        ))}
      </div>
    </Container>
  );
};

export default VideoCategory;
