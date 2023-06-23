import PromoCard from "../../Components/Cards/PromoCard";
import PromoContent from "../../Components/common/PromoContent/PromoContent";
import SearchMenu from "../../Components/common/SearchSec/Search";
import links from "../../Components/constance/navLinks";
import fLinks from "../../Components/constance/footerList";
import social from "../../Components/constance/socialMedia";
import VideoCategory from "../../Components/common/CategoryBrowser/VideoCategory";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import Photos from "../../Components/common/Photos/Photos";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addImages } from "../../Redux/Slice/image-slice";
import { useEffect } from "react";

const VideoPage = () => {
  const dispatch = useDispatch();

  const trendingVideos = useSelector((state) => state.images.imgList);
  useEffect(() => {
    document.title = "Stock Video And Stock Images Platform";
    (async () => {
      const { data } = await axios.post("/users/default-files", {
        tag: "",
        contentType: "video",
        skip: 0,
        limit: 4,
      });
      dispatch(addImages(data));
    })();
  }, []);

  return (
    <div className="g-0 container-fluid">
      <SearchMenu
        name="video"
        placeholder="search for video footage"
        selected="video"
        path="./images/IndexBG.png"
        alt="home page background"
        options={links}
      />
      <PromoCard index>
        <PromoContent text="Get Your Free Videos Footage and Images" btn-text="Join Now" index />
      </PromoCard>
      <VideoCategory>
        <h2 className="text-center">Browse trending video category</h2>
      </VideoCategory>
      <Photos videos={trendingVideos} title="Trending Videos" />
      <FooterBar lists={fLinks} social={social} />
    </div>
  );
};

export default VideoPage;
