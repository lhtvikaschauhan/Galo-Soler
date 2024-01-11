import ReactPlayer from "react-player";
import React, { useRef } from "react";
import gVideo from "./videos/galovideo.mp4";

const VIDEO_PATH = gVideo;

function VideoPlayer() {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
}
export default VideoPlayer;
