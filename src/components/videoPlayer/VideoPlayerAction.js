import { Heart } from "../icons/heart";
import { Message } from "../icons/Message";
import { Share } from "../icons/Share";

const VideoPlayerAction = ({ video }) => {
  const { likes, comments, shares, hearted, username, users } = video;
  const handleLike = () => {
    alert("like");
  };
  const handleComments = () => {
    alert("comments");
  };
  const handleShare = () => {
    alert("share");
  };
  return (
    <div className="actions">
      <img className="avatar action" src={users.avatar} alt={username} />

      <button className="action" onClick={handleLike}>
        <Heart />
        <strong title="like">{likes}</strong>
      </button>

      <button className="action" onClick={handleComments}>
        <Message />
        <strong title="comments">{comments}</strong>
      </button>

      <button className="action" onClick={handleShare}>
        <Share />
        <strong title="shares">{shares}</strong>
      </button>

      
    </div>
  );
};

export default VideoPlayerAction;
