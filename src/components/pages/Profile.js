import React from "react";
import ListVideos from "../feedVideos/ListVideos";
import avatar from "../icons/avatar.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <Link to="/">
          <svg
            fill="#ff0050"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g data-name="Layer 2">
              <g data-name="arrow-back">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                />
                <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z" />
              </g>
            </g>
          </svg>
        </Link>
        <h3>Johan David Pinzón</h3>
      </div>
      <article className="profile-info">
        <div className="flexbox">
          <img
            className="profile-avatar "
            src={avatar}
            alt="imagen de perfil"
          />
        </div>

        <h3 className="flexbox">@username</h3>
        <div className="flexbox">
          <div className="profile-item">
            <p>
              0 <br />
              <small>Following</small>
            </p>
          </div>
          <div className="profile-item">
            <p>
              0 <br />
              <small>Followers</small>
            </p>
          </div>
          <div className="profile-item">
            <p>
              0 <br />
              <small>Likes</small>
            </p>
          </div>
        </div>

        <p className="profile-bio">Biografia</p>
      </article>

      <div className="profile-list-videos">
        <ListVideos />
      </div>
    </div>
  );
};

export default Profile;
