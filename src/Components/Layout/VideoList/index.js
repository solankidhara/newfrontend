import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Base_URl } from "../../../app-environment";
import { addImages } from "../../../Redux/Slice/image-slice";
import BadgeList from "../../common/Badges/BadgeList";
import HoverPlayVideo from "../../common/Video-player/HoverPlayVideo";

const VideoList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThumbImage = (id) => {
    dispatch(addImages([]));
    navigate("/frame/" + id);
  };

  return (
    <>
      <BadgeList badgeContentType="video" />
      <Row className="container g-4 justify-content-center">
        {props.videos.slice(0, 20).map((video, index) => (
          <Col
            key={index}
            xxl={3}
            xl={4}
            lg={6}
            md={6}
            sm={12}
            onClick={() => handleThumbImage(video._id)}
          >
            <HoverPlayVideo
              src={Base_URl + video.thumbFile}
              style={{ width: "318", height: "100%" }}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default VideoList;
