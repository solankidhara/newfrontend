import axios from "axios";

import { useEffect, useState } from "react";

import fLinks from "../../Components/constance/footerList";
import links from "../../Components/constance/navLinks";
import social from "../../Components/constance/socialMedia";
import FooterBar from "../../Components/common/FooterBar/FooterBar";
import PlanPrompt from "../../Components/common/Plans/PlansPrompt";
import SearchControls from "../../Components/common/SearchControls/SearchControls";
import SearchResultsDisplay from "../../Components/common/SearchResultsDisplay/SearchResultsDisplay";
import classes from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../Redux/Slice/image-slice";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Dropdown from "../../Components/common/Dropdown";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";

const Search = () => {
  const dispatch = useDispatch();
  const { dd, tag } = useParams();
  const { control, watch } = useForm();
  const [filterData, setFilterData] = useState([]);

  const watchFilterType = watch("file_type", null);
  const watchLicense = watch("license", null);
  const watchSize = watch("size", null);

  const searchResult = useSelector((state) => state.images.imgList);

  useEffect(() => {
    (async () => {
      const result = await axios.get("/users/filter-data");
      setFilterData(result.data);
    })();
  }, []);

  useEffect(() => {
    dispatch(addImages([]));
    (async () => {
      const { data } = await axios.post("/users/default-files", {
        tag: tag ? tag : "",
        contentType: dd ? dd : "",
        limit: 4,
        skip: 0,
        fileType: watchFilterType?.label,
        licenseType: watchLicense?.label,
        size: watchSize?.label,
      });
      dispatch(addImages(data));
    })();
  }, [dispatch, dd, tag, watchFilterType, watchLicense, watchSize]);

  const fetchMoreSimilarContent = async () => {
    const { data } = await axios.post("/users/default-files", {
      tag: tag ? tag : "",
      contentType: dd ? dd : "",
      limit: searchResult.length + 4,
      skip: searchResult.length,
      fileType: watchFilterType?.label,
      licenseType: watchLicense?.label,
      size: watchSize?.label,
    });
    dispatch(addImages([...searchResult, ...data]));
  };

  return (
    <div className="g-0 container-fluid">
      <div className={classes.bar}>
        <SearchControls
          name={"search"}
          placeholder={"search for 3D"}
          selected={"3d"}
          options={links}
        />
      </div>

      <form>
        <Container>
          <Row>
            <Col sm={4}>
              <Dropdown
                control={control}
                name="file_type"
                options={filterData.fileTypes}
                defaultValue={null}
                isClearable
              />
            </Col>
            <Col sm={4}>
              <Dropdown
                control={control}
                name="license"
                options={filterData.licenses}
                defaultValue={null}
                isClearable
              />
            </Col>
            <Col sm={4}>
              <Dropdown
                control={control}
                name="size"
                options={filterData.sizes}
                defaultValue={null}
                isClearable
              />
            </Col>
          </Row>
        </Container>
      </form>

      <InfiniteScroll
        dataLength={searchResult.length}
        next={fetchMoreSimilarContent}
        hasMore={true}
        scrollThreshold="60%"
      >
        <SearchResultsDisplay thumbImages={searchResult} />
      </InfiniteScroll>

      <div className="mt-4">
        <PlanPrompt text="Check all pricing and plans" btnLabel="Check Now" />
        <FooterBar lists={fLinks} social={social} />
      </div>
    </div>
  );
};

export default Search;
