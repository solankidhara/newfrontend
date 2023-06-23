import React from "react";

import HoverVideoPlayer from "react-hover-video-player";

const HoverPlayVideo = ({src ,style}) => {
  return (
      <HoverVideoPlayer
        videoSrc={src}
        style={style}
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    
  );
};

export default HoverPlayVideo;
