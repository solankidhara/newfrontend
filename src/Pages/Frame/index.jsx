import BadgeList from "../../Components/common/Badges/BadgeList";
import Preview from "../../Components/common/Preview/Preview";
import SimilarContent from "../../Components/common/SimilarContent/SimilarContent";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";
import FooterBar from "../../Components/common/FooterBar/FooterBar";

import classes from "./index.module.css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { addImages } from "../../Redux/Slice/image-slice";
import InfiniteScroll from "react-infinite-scroll-component";

const Frame = () => {
  const [selectedImage , setSelectedImage] = useState();
  let { id } = useParams();
  const dispatch = useDispatch();
  
  const shortListedImage = useSelector((state) => state.images.imgList).filter((ele) => ele._id !== id);
  const allImages = useSelector(state => state.images.imgList)
  document.title = (allImages[0]?.category_id?.name ? allImages[0]?.category_id?.name : "") + " ABCStock";

  useEffect(() => {
    (async () => {
      const { data } = await axios.post("/users/related-files", {
        id: id,
        limit: 5,
        skip: 0,
      });
      dispatch(addImages(data));
      setSelectedImage(data[0])
    })();
  }, [id ,dispatch]);

  const fetchMoreSimilarContent = async () => {
    const { data } = await axios.post("/users/related-files", {
      id: id,
      limit: shortListedImage.length + 5,
      skip: shortListedImage.length,
    });
    data.shift()
    dispatch(addImages([ ...allImages, ...data]));
  };

  return (
    <div className="g-0 container-fluid">
      <Container>
        <div className={classes.preview}>
          {selectedImage &&<Preview selectedImage={selectedImage} />}
        </div>
        <div className={classes.tags}>
          <label>Tags</label>
          <BadgeList badgeContentType={selectedImage?.content_type_id?.type} />
        </div>
        <div className={classes.related}>
          <label>Similar Content</label>
          <InfiniteScroll
            dataLength={shortListedImage.length}
            next={fetchMoreSimilarContent}
            hasMore={true}
            scrollThreshold="50%"
            style={{ overflow: "none" }}
          >
            <SimilarContent content={shortListedImage} />
          </InfiniteScroll>
        </div>
      </Container>
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};

export default Frame;
