import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-16 absolute text-gray-100 bg-gradient-to-r from-black">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="py-6 text-lg   w-1/2">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white p-2 px-8 border text-black border-gray-400 rounded-md font-medium text-lg hover:bg-gray-200">
        ▶ Play
        </button>
        <button className="bg-gray-500 p-2 px-10  rounded-md font-medium text-lg text-white hover:bg-gray-200 hover:text-black">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
