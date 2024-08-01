import React from "react";
import Tvideo from "../assets/TopVideo.mp4";

export default function MainSection() {
  return (
    <div className=" h-full w-full overflow-hidden  ">
      <video
        src={Tvideo}
        className="h-full w-full "
        muted
        autoPlay
        loop
        playsInline
      ></video>
    </div>
  );
}
