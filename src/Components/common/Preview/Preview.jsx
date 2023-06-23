import { Fragment, useRef } from "react";
import { Base_URl } from "../../../app-environment";
import FileButtons from "../../Layout/FileButtons/FileButtons";
import FileDescription from "../../Layout/FileDescription/FileDescription";
import FileInfo from "../../Layout/FileInfo/FileInfo";
import VideoJS from "../Video-player";
import classes from "./Preview.module.css";

const Preview = ({ selectedImage }) => {
  const playerReference = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted: true,
    controlBar: {
      pictureInPictureToggle: false,
    },
    sources: [
      {
        src: Base_URl + selectedImage?.waterMarkFile,
        type: "video/mp4",
      },
    ],
  };

  const playerReady = (player) => {
    playerReference.current = player;
  };

  return (
    <Fragment>
      <div className="d-flex flex-column flex-lg-row">
        <div className={classes.preview_img}>
          {selectedImage?.content_type_id?.type === "image" && (
            <img
              alt="preview"
              src={Base_URl + selectedImage?.waterMarkFile}
              className="img-fluid"
              style={{ height: "500px" }}
            />
          )}
          {selectedImage?.content_type_id?.type === "video" && (
            <VideoJS options={videoJsOptions} onReady={playerReady} />
          )}
        </div>
        <div
          className={
            "d-flex flex-column flex-sm-row flex-lg-column justify-content-between " +
            classes.info
          }
        >
          <FileInfo
            size={selectedImage?.size?.name}
            extension={selectedImage?.file_type?.name}
            licence={selectedImage?.license_type?.name}
          />
          <FileButtons />
        </div>
      </div>
      <FileDescription
        title="Description"
        description={selectedImage?.description}
      />
    </Fragment>
  );
};

export default Preview;
