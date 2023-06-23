import { Fragment } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Base_URl } from "../../../app-environment";
import { addImages } from "../../../Redux/Slice/image-slice";
import HoverPlayVideo from "../Video-player/HoverPlayVideo";
import classes from "./SearchResultsDisplay.module.css";

const SearchResultsDisplay = ({ thumbImages }) => {
  const { dd, tag } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleThumbImage = (id) => {
    dispatch(addImages([]));
    navigate("/frame/" + id);
  };

  return (
    <Fragment>
      <Container className={classes.tags}>
        <Row className="my-2">
          {thumbImages.map((thumbImg , i) => {
            if (thumbImg.content_type_id.type === "image") {
              return (
                <Col
                  key={thumbImg._id + i }
                  xxl={3}
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  className="py-2"
                  onClick={() => handleThumbImage(thumbImg._id)}
                >
                  <img
                    className="img-fluid"
                    src={Base_URl + thumbImg.thumbFile}
                    alt="search result"
                    width={318}
                    height={200}
                  />
                </Col>
              );
            } else if (thumbImg.content_type_id.type === "video") {
              return (
                <Col
                  key={thumbImg._id + i}
                  xxl={3}
                  xl={4}
                  lg={6}
                  md={6}
                  sm={12}
                  className="py-2"
                  onClick={() => handleThumbImage(thumbImg._id)}
                >
                  <HoverPlayVideo
                    src={Base_URl + thumbImg.thumbFile}
                    style={{ width: "318", height: "100%" }}
                  />
                </Col>
              );
            }
          })}
          {!thumbImages.length && (
            <Alert variant="primary">
              The content type {dd} and search keyword {tag} could not be found.
            </Alert>
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default SearchResultsDisplay;
