import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { addImages } from "../../../Redux/Slice/image-slice";
import PhotoList from "../../Layout/PhotoList/PhotoList";
import VideoList from "../../Layout/VideoList";
import classes from "./Photos.module.css";

const Photos = ({ images, title, videos }) => {
  const dispatch = useDispatch();

  const fetchMoreImages = async () => {
    const { data } = await axios.post("/users/default-files", {
      tag: "",
      contentType: "image",
      limit: images.length + 4,
      skip: images.length,
    });
    dispatch(addImages([...images, ...data]));
  };

  const fetchMoreVideos = async () => {
    const { data } = await axios.post("/users/default-files", {
      tag: "",
      contentType: "video",
      limit: videos.length + 4,
      skip: videos.length,
    });
    dispatch(addImages([...videos, ...data]));
  };

  return (
    <div className={"mt-5 " + classes.container}>
      <div className={classes.pad}>
        <h6 className={classes.heading}>{title}</h6>
        {images && (
          <InfiniteScroll
            dataLength={images.length}
            next={fetchMoreImages}
            hasMore={true}
            scrollThreshold="50%"
          >
            <PhotoList images={images} />
          </InfiniteScroll>
        )}

        {videos && (
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchMoreVideos}
            hasMore={true}
            scrollThreshold="50%"
            style={{ overflow: "none" }}
          >
            <VideoList videos={videos} />
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default Photos;
