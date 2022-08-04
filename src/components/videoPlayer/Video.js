import { useRef, useState } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import VideoDescription from "./VideoDescription";
import VideoPlayerAction from "./VideoPlayerAction";
import { Menu } from "../icons/Menu";
import tiktoklogo from "../icons/tiktoklogo.png";
import { Link } from "react-router-dom";

export default function Video({ src, video }) {
  const [isVisibleMenu, setIsvisibleMenu] = useState(false);
  const videoRef = useRef(null);
  const { playing, handlePlay } = useVideoPlayer({ videoRef, isVisibleMenu});
  const { users, description, songTitle } = video;
  const { username } = users;

  function toggleMenu() {
    setIsvisibleMenu(!isVisibleMenu);
  }                                                                                       

  return (
    <div
      onClick={handlePlay}
      className={'wrapper' }
    >
      
      <video
        loop
        ref={videoRef}
        src={src}
        controls={false}
        className={`video ${!isVisibleMenu && "nonepointer"}`}
      ></video>
      
      
      <button className={`player ${playing && "none"} ${isVisibleMenu && "nonepointer"}`}></button>

      <VideoPlayerAction video={video} />
      <VideoDescription
        username={username}
        description={description}
        songTitle={songTitle}
      />

      <div className="menu-btn" onClick={toggleMenu}>
        <Menu />
      </div>

      <div className={`menu-options && ${!isVisibleMenu && "none"}`}>
        <div className="menu-item">
          <img src={tiktoklogo} alt="" className="img-tiktok" />
        </div>

        <div className="menu-item">
        <Link className="link" to="/profile">
            <h2>Mi perfil</h2>
          </Link>
        </div>

        <div className="menu-item">
          <Link className="link" to="/upload">
            <h2>Subir video</h2>
          </Link>
        </div>

        <div className="menu-item">
          <h2>Ayuda</h2>
        </div>
      </div>
    </div>
  );
}
