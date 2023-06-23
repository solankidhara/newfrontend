import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Base_URl } from "../../../app-environment";
import { addImages } from "../../../Redux/Slice/image-slice";
import BadgeList from "../../common/Badges/BadgeList";
import classes from "./PhotoList.module.css";

const PhotoList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleThumbImage = (id) => {
    dispatch(addImages([]));
    navigate("/frame/" + id);
  };

  return (
    <>
      <BadgeList badgeContentType="image" />
      <div className="mt-3 d-flex flex-wrap justify-content-center">
        {props.images.map((image, index) => (
          <div
            key={index}
            className={classes["img-container"]}
            onClick={() => handleThumbImage(image._id)}
          >
            <img
              alt="trending"
              src={Base_URl + image.thumbFile}
              width={318}
              height={200}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default PhotoList;
