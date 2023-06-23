import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Base_URl } from "../../../app-environment";
import { addImages } from "../../../Redux/Slice/image-slice";
import HoverPlayVideo from "../Video-player/HoverPlayVideo";
import classes from "./similarcontent.module.css";

const SimilarContent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThumbImage = (id) => {
    dispatch(addImages([]));
    navigate("/frame/" + id);
  };

  return (
    <Row className="g-4 py-2">
      {props.content.map((ele, index) => (
        <Col key={index} xxl={3} xl={4} lg={6} md={6} sm={12} onClick={() => handleThumbImage(ele._id)}>
          <div className={classes.similarImg}>
            {ele.content_type_id.type === "image" && <img alt="related content" src={Base_URl+ele.thumbFile} />}
            {ele.content_type_id.type === "video" && <HoverPlayVideo src={Base_URl+ele.thumbFile} />}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SimilarContent;
