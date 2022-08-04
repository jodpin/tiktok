import { useRef } from "react";
import ReactPlayer from "react-player";

export default function VideoProfile({ src }) {
  const videoRef = useRef(null);

  return (
    <div className="profile-video">
      <ReactPlayer controls={true} loop  url={src} playing={false} width="100%" height="100%"/>
    </div>
  );
}
