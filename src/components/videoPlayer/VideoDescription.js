import React from "react";
import SongTicker from "../icons/SongTicker";


const VideoDescription = ({ username, description, songTitle}) => {
  return (
    <footer className="description">
      <div className="textWrapper">
        <strong>
          <a className="username" href={`/users/${username}`}>{username}</a>
        </strong>
        <p className="text">{description}</p>
        <SongTicker songTitle={songTitle}/>
      </div>
    </footer>
  );
};

export default VideoDescription;
