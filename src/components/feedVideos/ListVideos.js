import React, { useEffect, useState } from "react";
import VideoProfile from "../videoPlayer/VideoProfile";
import { getUser } from "../../services/index";

const ListVideos = () => {
  const [videos, setBideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser().then(([data, error]) => {
      if (error) return setError(error);
      setBideos(data[0].videos);
    });
  }, []);

  if (error) return <span>{error}</span>;

  return videos.map((video, index) => {
    return (
      <div key={index}>
        <VideoProfile src={video.src} />
      </div>
    );
  });
};

export default ListVideos;
