import React, { useEffect, useState } from "react";
import Video from "../videoPlayer/Video";
import { getVideos } from "../../services/index";

const FeedVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos().then(([videos, error]) =>{
      if(error) return setError(error);
      setVideos(videos);
     console.log({ error, videos })});
}, []);

if(error) return(<span>{error}</span>)

  return videos.map((video) => {
    return (
      <div key={video.id} className="item">
        <Video src={video.src} video={video} />
      </div>
    );
  });
};

export default FeedVideos;
